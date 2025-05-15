import { calculateLateInterest } from "../../../api/common/lib/general";
import { prisma } from "../../index";
import { IPaymentApplication, IRegisterPayment, IRegisterPaymentAgreement } from "../interfaces/payments.interface";
import { RegisterPaymentAgreementSchema } from "../schemas/Payments.schemas";
import { tenantConfigService } from "./tenantConfig.service";

class PaymentsService {
  // 1. Registrar un pago con distribución de montos entre cuotas
  async registerPayment(
    tenantId: string,
    payload: IRegisterPayment
  ) {

    // Check if the accounts receivable exists
    const accountsReceivable = await prisma.accountsReceivable.findUnique({
      where: { id: payload.invoiceId, tenantId: tenantId },
    });

    if (!accountsReceivable) {
      throw new Error("Accounts receivable not found");
    }
    // Verificar si hay un acuerdo de pago asociado
    const paymentAgreement = await prisma.paymentAgreement.findFirst({
      where: {
        accountsReceivableId: payload.invoiceId,
        accountsReceivable: {
          tenantId: tenantId,
        },
      },
    });

    let remainingAmount = payload.paymentAmount;

    if (paymentAgreement) {
      // Si vienen cuotas específicas en el payload
      if (payload.installmentIds && payload.installmentIds.length > 0) {
        for (const installmentId of payload.installmentIds) {
          if (remainingAmount <= 0) break;

          const installment = await prisma.installment.findUnique({
            where: { id: installmentId },
          });

          if (!installment || installment.paymentAgreementId !== paymentAgreement.id) {
            throw new Error(`Invalid installment ID: ${installmentId}`);
          }

          const amountToPay = Math.min(installment.remainingAmount, remainingAmount);

          // Actualizar el estado de la cuota
          const newRemainingAmount = installment.remainingAmount - amountToPay;
          const newAmountPaid = installment.amountPaid + amountToPay;
          const newStatus =
            newRemainingAmount === 0
              ? "paid"
              : newAmountPaid > 0
                ? "partially_paid"
                : "pending";

          await prisma.installment.update({
            where: { id: installment.id },
            data: {
              amountPaid: newAmountPaid,
              remainingAmount: newRemainingAmount,
              paid: newRemainingAmount === 0,
              paidAt: newRemainingAmount === 0 ? new Date() : null,
              status: newStatus,
            },
          });

          // Crear el detalle del pago especificando información de la cuota
          const payment = await prisma.paymentDetail.create({
            data: {
              accountsReceivableId: payload.invoiceId,
              paymentAgreementId: paymentAgreement.id,
              paymentAmount: amountToPay,
              paymentMethod: payload.paymentMethod,
              referenceNumber: payload.referenceNumber,
              notes: `Installment ${installment.installmentNumber}: ${payload.notes}`,
              createdAt: new Date(),
              paymentDate: new Date(),
            },
          });

          remainingAmount -= amountToPay;

          // Distribuir el pago entre capital, interés, impuestos, cobranza, etc.
          await this.distributePayment(payment.id);
        }
      }

      if (payload.initialPaymentStatus === "pending") {
        const amountToApply = payload.initialPayment || 0;

        // Crear el detalle del pago especificando información de la cuota
        const payment = await prisma.paymentDetail.create({
          data: {
            accountsReceivableId: payload.invoiceId,
            paymentAgreementId: paymentAgreement.id,
            paymentAmount: amountToApply,
            paymentMethod: payload.paymentMethod,
            referenceNumber: payload.referenceNumber,
            notes: `Initial Payment: ${payload.notes}`,
            createdAt: new Date(),
            paymentDate: new Date(),
          },
        });

        // SI SE CREO EL PAGO SE ACTUALIZA EL ACUERDO DE PAGO
        if (payment) {
          await prisma.paymentAgreement.update({
            where: { id: paymentAgreement.id },
            data: {
              initialPaymentStatus:
                amountToApply === paymentAgreement.initialPayment
                  ? "completed"
                  : "pending"
            },
          });
        }
      }

      // Enviar el monto restante para recalcular el saldo pendiente, incluso si es cero
      await this.recalculateInvoiceBalance(
        tenantId,
        payload.invoiceId
      );
    } else {

      // Si no hay acuerdo de pago, registrar el pago directamente
      const payment = await prisma.paymentDetail.create({
        data: {
          accountsReceivableId: payload.invoiceId,
          paymentAmount: payload.paymentAmount,
          paymentMethod: payload.paymentMethod,
          referenceNumber: payload.referenceNumber,
          notes: payload.notes,
          createdAt: new Date(),
          paymentDate: new Date(),
        },
      });

      // Recalcular el saldo pendiente de la factura
      await this.recalculateInvoiceBalance(tenantId, payload.invoiceId);

      // Distribuir el pago entre capital, interés, impuestos, cobranza, etc.
      await this.distributePayment(payment.id);
    }

    return { success: true };
  }


  // 3. Obtener todos los pagos de un tenant
  async getAllPayments(tenantId: string) {
    const payments = await prisma.paymentDetail.findMany({
      where: {
        accountsReceivable: {
          tenantId: tenantId,
        },
      },
      include: {
        accountsReceivable: true,
      },
    });

    return payments;
  }

  // 4. Obtener pagos por factura
  async getPaymentsByInvoice(invoiceId: string) {
    const payments = await prisma.paymentDetail.findMany({
      where: { accountsReceivableId: invoiceId },
    });

    return payments;
  }

  // 5. Obtener pagos por usuario (deudor)
  async getPaymentsByDebtor(tenantId: string, debtorId: string) {
    const payments = await prisma.paymentDetail.findMany({
      where: {
        accountsReceivable: {
          debtorId: debtorId,
          tenantId: tenantId,
        },
      },
      include: {
        accountsReceivable: true,
      },
    });

    return payments;
  }

  // 6. Obtener pago específico por ID
  async getPaymentById(paymentId: string) {
    const payment = await prisma.paymentDetail.findUnique({
      where: { id: paymentId },
    });

    if (!payment) {
      throw new Error("Payment not found");
    }

    return payment;
  }

  // 7. Actualizar un pago (por ejemplo corregir monto o referencia)
  async updatePayment(tenantId: string, paymentId: string, data: any) {
    const payment = await prisma.paymentDetail.findUnique({
      where: { id: paymentId, accountsReceivable: { tenantId: tenantId } },
    });

    if (!payment) {
      throw new Error("Payment not found");
    }

    const updatedPayment = await prisma.paymentDetail.update({
      where: { id: paymentId },
      data,
    });

    // Recalculate the invoice balance
    await this.recalculateInvoiceBalance(
      tenantId,
      payment.accountsReceivableId
    );

    return updatedPayment;
  }

  // 8. Eliminar un pago (y actualizar el saldo pendiente de la factura)
  async deletePayment(tenantId: string, paymentId: string) {
    const payment = await prisma.paymentDetail.findUnique({
      where: { id: paymentId, accountsReceivable: { tenantId: tenantId } },
    });

    if (!payment) {
      throw new Error("Payment not found");
    }

    const invoiceId = payment.accountsReceivableId;

    await prisma.paymentDetail.delete({
      where: { id: paymentId },
    });

    // Recalculate the invoice balance
    await this.recalculateInvoiceBalance(tenantId, invoiceId);
  }

  // 9. Validar consistencia: Recalcular automáticamente el saldo pendiente de una factura
  async recalculateInvoiceBalance(
    tenantId: string,
    invoiceId: string
  ) {
    //
    const payments = await prisma.paymentDetail.findMany({
      where: {
        accountsReceivableId: invoiceId,
        accountsReceivable: { tenantId: tenantId },
      },
    });

    // Sumar todos los pagos realizados
    const totalPaid = payments.reduce(
      (sum, payment) => sum + payment.paymentAmount,
      0
    );

    // Obtener la factura asociada
    const invoice = await prisma.accountsReceivable.findUnique({
      where: { id: invoiceId, tenantId: tenantId },
    });

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    const remainingBalance = invoice.invoiceAmount - totalPaid;

    await prisma.accountsReceivable.update({
      where: { id: invoiceId },
      data: {
        remainingBalance: remainingBalance,
        // receivableStatus: remainingBalance <= 0 ? "paid" : "pending",
      },
    });

    // Recalcular el saldo pendiente del acuerdo de pago, si existe
    if(invoice.paymentAgreementId){
      this.recalculatePaymentAgreement(
        tenantId,
        invoice.paymentAgreementId
      ).catch((error) => {
        console.error("Error recalculating payment agreement:", error);
      });
    }

    // Si hay un acuerdo de pago, actualizar el saldo restante
    await this.updateInvoiceStatusIfPaid(invoiceId);
  }



  // Recalcular los valores de PaymentAgreement
  async recalculatePaymentAgreement(tenantId: string, paymentAgreementId: string) {
    // Obtener el acuerdo de pago
    const paymentAgreement = await prisma.paymentAgreement.findUnique({
      where: { id: paymentAgreementId },
      include: {
        Installments: true,
        PaymentDetail: true
      },
    });

    if (!paymentAgreement) {
      throw new Error("Payment agreement not found");
    }

    // Obtener todos los pagos relacionados con el acuerdo de pago
    const payments = await prisma.paymentDetail.findMany({
      where: {
        paymentAgreementId: paymentAgreementId,
        accountsReceivable: { tenantId: tenantId },
      },
    });

    // Calcular el total pagado
    const totalPaid = payments.reduce(
      (sum, payment) => sum + payment.paymentAmount,
      0
    );

    // Calcular el saldo restante
    const remainingBalance = paymentAgreement.totalAmount - totalPaid;

    // Actualizar el acuerdo de pago
    await prisma.paymentAgreement.update({
      where: { id: paymentAgreementId },
      data: {
        totalPaid: parseFloat(totalPaid.toFixed(2)),
        remainingBalance: parseFloat(remainingBalance.toFixed(2)),
        paymentStatus: remainingBalance <= 0 ? "completed" : "active",
      },
    });
    
    return { success: true };
  }

  // 10. Validar consistencia: Actualizar estado de factura cuando ya se pagó completamente
  async updateInvoiceStatusIfPaid(invoiceId: string) {
    const invoice = await prisma.accountsReceivable.findUnique({
      where: { id: invoiceId },
    });

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    // Sumamos todos los fees de cobranza y ABB
    const totalFees =
      invoice.clientCollectionAmount
      + invoice.clientAbbAmount;
    // + invoice.adminCollectionAmount
    // + invoice.adminAbbAmount;

    // Sumamos el monto de la factura con los fees
    const totalWithFees = invoice.invoiceAmount + totalFees;

    const payments = await prisma.paymentDetail.findMany({
      where: { accountsReceivableId: invoiceId },
    });

    const totalPaid = payments.reduce(
      (sum, payment) => sum + payment.paymentAmount,
      0
    );

    console.log("Total Pagado:", totalPaid);
    console.log("Total con Fees:", totalWithFees);

    if (totalPaid >= totalWithFees) {
      await prisma.accountsReceivable.update({
        where: { id: invoiceId },
        data: {
          receivableStatus: "paid",
          collectionStatus: "settled",
          remainingBalance: 0,
        },
      });

      // Si hay un acuerdo de pago, actualizar el estado
      if (invoice.hasPaymentAgreement && invoice.paymentAgreementId) {
        await prisma.paymentAgreement.update({
          where: { id: invoice.paymentAgreementId },
          data: {
            paymentStatus: "completed",
            remainingBalance: 0,
          },
        });
      }
    }
  }

  // 11. Distribuir pagos entre capital, interés, impuestos, cobranza, etc.
  async distributePayment(paymentDetailId: string) {

    // Fetch the payment detail and associated invoice
    const paymentDetail = await prisma.paymentDetail.findUnique({
      where: { id: paymentDetailId },
      include: { accountsReceivable: true },
    });

    if (!paymentDetail) {
      throw new Error("Payment detail not found");
    }

    // Check if the payment detail is associated with an invoice
    const invoice = paymentDetail.accountsReceivable;

    if (!invoice) {
      throw new Error("Associated invoice not found");
    }

    let remainingAmount = paymentDetail.paymentAmount;

    const paymentApplications: IPaymentApplication[] = [];

    // Fetch existing payment applications for the invoice
    const existingApplications = await prisma.paymentApplication.findMany({
      where: { accountsReceivableId: invoice.id },
    });

    const appliedAmounts = existingApplications.reduce((acc, app) => {
      acc[app.appliedTo] = (acc[app.appliedTo] || 0) + app.amountApplied;
      return acc;
    }, {} as Record<string, number>);

    // Apply to administrative fees (cobranza)
    if (remainingAmount > 0 && (appliedAmounts["ADMIN_COLLECTION_FEE"] || 0) < invoice.adminCollectionAmount) {
      const amountToApply = Math.min(
        invoice.adminCollectionAmount - (appliedAmounts["ADMIN_COLLECTION_FEE"] || 0),
        remainingAmount
      );
      paymentApplications.push({
        paymentDetailId,
        accountsReceivableId: invoice.id,
        amountApplied: amountToApply,
        appliedTo: "ADMIN_COLLECTION_FEE",
      });
      remainingAmount -= amountToApply;
    }

    // Apply to admin ABB fee (intereses de mora)
    if (remainingAmount > 0 && (appliedAmounts["ADMIN_ABB_FEE"] || 0) < invoice.adminAbbAmount) {
      const amountToApply = Math.min(
        invoice.adminAbbAmount - (appliedAmounts["ADMIN_ABB_FEE"] || 0),
        remainingAmount
      );
      paymentApplications.push({
        paymentDetailId,
        accountsReceivableId: invoice.id,
        amountApplied: amountToApply,
        appliedTo: "ADMIN_ABB_FEE",
      });
      remainingAmount -= amountToApply;
    }

    // Apply to client collection fee (cobranza)
    if (remainingAmount > 0 && (appliedAmounts["CLIENT_COLLECTION_FEE"] || 0) < invoice.clientCollectionAmount) {
      const amountToApply = Math.min(
        invoice.clientCollectionAmount - (appliedAmounts["CLIENT_COLLECTION_FEE"] || 0),
        remainingAmount
      );
      paymentApplications.push({
        paymentDetailId,
        accountsReceivableId: invoice.id,
        amountApplied: amountToApply,
        appliedTo: "CLIENT_COLLECTION_FEE",
      });
      remainingAmount -= amountToApply;
    }

    // Apply to client ABB fee (intereses de mora)
    if (remainingAmount > 0 && (appliedAmounts["CLIENT_ABB_FEE"] || 0) < invoice.clientAbbAmount) {
      const amountToApply = Math.min(
        invoice.clientAbbAmount - (appliedAmounts["CLIENT_ABB_FEE"] || 0),
        remainingAmount
      );
      paymentApplications.push({
        paymentDetailId,
        accountsReceivableId: invoice.id,
        amountApplied: amountToApply,
        appliedTo: "CLIENT_ABB_FEE",
      });
      remainingAmount -= amountToApply;
    }

    // Apply to interest (intereses de mora)
    if (remainingAmount > 0) {
      if (invoice.interestFrozenAmount && (appliedAmounts["INTEREST"] || 0) < invoice.interestFrozenAmount) {
        const amountToApply = Math.min(
          invoice.interestFrozenAmount - (appliedAmounts["INTEREST"] || 0),
          remainingAmount
        );
        paymentApplications.push({
          paymentDetailId,
          accountsReceivableId: invoice.id,
          amountApplied: amountToApply,
          appliedTo: "INTEREST",
        });
        remainingAmount -= amountToApply;
      }
    }

    // Apply to capital (capital original)
    if (remainingAmount > 0) {
      const amountToApply = Math.min(invoice.invoiceAmount, remainingAmount);
      paymentApplications.push({
        paymentDetailId,
        accountsReceivableId: invoice.id,
        amountApplied: amountToApply,
        appliedTo: "CAPITAL",
      });
      remainingAmount -= amountToApply;
    }

    // Save payment applications once all the amount is distributed
    if (paymentApplications.length > 0) {
      for (const application of paymentApplications) {
        await prisma.paymentApplication.create({
          data: {
            paymentDetailId: application.paymentDetailId,
            accountsReceivableId: application.accountsReceivableId,
            amountApplied: application.amountApplied,
            appliedTo: application.appliedTo,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
      }
    }

    return { success: true, paymentApplications };
  }

  // 12. Registrar acuerdo de pago
  async registerPaymentAgreement(
    tenantId: string,
    payload: IRegisterPaymentAgreement
  ) {
    // Validate payload using the schema
    const parsedPayload = RegisterPaymentAgreementSchema.parse(payload);

    // Fetch the associated invoice
    const invoice = await prisma.accountsReceivable.findUnique({
      where: { id: parsedPayload.invoiceId, tenantId: tenantId },
    });

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    // Validate initial payment
    if (parsedPayload.initialPayment > parsedPayload.totalAmount) {
      throw new Error("Initial payment exceeds total amount");
    }

    // Calculate remaining balance after initial payment
    const remainingBalance = parsedPayload.totalAmount - parsedPayload.initialPayment;

    // Validate installments total matches remaining balance
    const installmentsTotal = parsedPayload.installmentsDetail.reduce(
      (sum, installment) => sum + parseFloat(installment.amount),
      0
    );

    if (installmentsTotal !== remainingBalance) {
      throw new Error("Installments total does not match remaining balance");
    }

    // Validate installment numbers are sequential and unique
    const installmentNumbers = parsedPayload.installmentsDetail.map(
      (installment) => installment.installmentNumber
    );
    const uniqueInstallmentNumbers = new Set(installmentNumbers);

    if (
      uniqueInstallmentNumbers.size !== parsedPayload.installmentsDetail.length ||
      Math.min(...installmentNumbers) !== 1 ||
      Math.max(...installmentNumbers) !== parsedPayload.installmentsDetail.length
    ) {
      throw new Error("Installment numbers must be sequential and unique");
    }

    // Create the payment agreement
    const paymentAgreement = await prisma.paymentAgreement.create({
      data: {
        accountsReceivableId: parsedPayload.invoiceId,
        initialPayment: parseFloat(parsedPayload.initialPayment.toFixed(2)),
        remainingBalance: parseFloat(remainingBalance.toFixed(2)),
        totalAmount: parseFloat(parsedPayload.totalAmount.toFixed(2)),
        numberOfInstallments: parsedPayload.installments,
        initialPaymentDeadline: new Date(parsedPayload.initialPaymentDeadline),
        paymentStatus: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Create installments
    for (const installment of parsedPayload.installmentsDetail) {
      await prisma.installment.create({
        data: {
          paymentAgreementId: paymentAgreement.id,
          installmentNumber: installment.installmentNumber,
          dueDate: new Date(installment.dueDate),
          originalAmount: parseFloat(installment.amount),
          amountPaid: 0,
          remainingAmount: parseFloat(installment.amount),
          paid: false,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    }

    // Update the invoice to link it with the payment agreement
    await prisma.accountsReceivable.update({
      where: { id: parsedPayload.invoiceId },
      data: {
        paymentAgreementId: paymentAgreement.id,
        hasPaymentAgreement: true,
        collectionStatus: "payment_agreement",
      },
    });

    return { success: true, paymentAgreement };
  }
}

export const paymentsService = new PaymentsService();
