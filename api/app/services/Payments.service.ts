import { calculateLateInterest } from "../../../api/common/lib/general";
import { prisma } from "../../index";
import { IPaymentApplication } from "../interfaces/payments.interface";
import { tenantConfigService } from "./tenantConfig.service";

class PaymentsService {
  // 1. Registrar un pago con distribución de montos entre cuotas
  async registerPayment(
    tenantId: string,
    invoiceId: string,
    amount: number,
    paymentMethod: string,
    referenceNumber: string,
    notes: string
  ) {
    // Verificar si hay un acuerdo de pago asociado
    const paymentAgreement = await prisma.paymentAgreement.findFirst({
      where: {
        accountsReceivableId: invoiceId,
        accountsReceivable: {
          tenantId: tenantId,
        },
      },
    });

    if (paymentAgreement) {
      // Considerar el pago inicial si aún no se ha completado
      let remainingAmount = amount;
      if (paymentAgreement.initialPaymentStatus === "pending") {
        const amountToApply = Math.min(
          paymentAgreement.initialPayment,
          remainingAmount
        );

        // Crear el detalle del pago para el pago inicial
        const payment = await prisma.paymentDetail.create({
          data: {
            accountsReceivableId: invoiceId,
            paymentAgreementId: paymentAgreement.id,
            paymentAmount: amountToApply,
            paymentMethod,
            referenceNumber,
            notes: `Initial Payment: ${notes}`,
            createdAt: new Date(),
            paymentDate: new Date(),
          },
        });

        remainingAmount -= amountToApply;

        // Distribuir el pago entre capital, interés, impuestos, cobranza, etc.
        await this.distributePayment(payment.id);
      }

      // Obtener cuotas pendientes asociadas al acuerdo de pago
      const installments = await prisma.installment.findMany({
        where: {
          paymentAgreementId: paymentAgreement.id,
          paid: false, // Solo cuotas no pagadas
        },
      });

      for (const installment of installments) {
        if (remainingAmount <= 0) break;

        const amountToPay = Math.min(installment.amount, remainingAmount);

        // Actualizar el pago de la cuota
        await prisma.installment.update({
          where: { id: installment.id },
          data: {
            paid: amountToPay === installment.amount,
            paidAt: amountToPay === installment.amount ? new Date() : null,
            amount: installment.amount - amountToPay,
          },
        });

        // Crear el detalle del pago
        const payment = await prisma.paymentDetail.create({
          data: {
            accountsReceivableId: invoiceId,
            paymentAgreementId: paymentAgreement.id,
            paymentAmount: amountToPay,
            paymentMethod,
            referenceNumber,
            notes,
            createdAt: new Date(),
            paymentDate: new Date(),
          },
        });

        remainingAmount -= amountToPay;

        // Distribuir el pago entre capital, interés, impuestos, cobranza, etc.
        await this.distributePayment(payment.id);
      }

      // Enviar el monto restante para recalcular el saldo pendiente, incluso si es cero
      await this.recalculateInvoiceBalance(
        tenantId,
        invoiceId,
        remainingAmount
      );
    } else {
      // Verificar que la factura pertenece al tenant
      const invoice = await prisma.accountsReceivable.findUnique({
        where: { id: invoiceId, tenantId: tenantId },
        include: {
          debtor: true,
        },
      });

      if (!invoice) {
        throw new Error("Invoice not found");
      }
      // Si no hay acuerdo de pago, registrar el pago directamente
      const payment = await prisma.paymentDetail.create({
        data: {
          accountsReceivableId: invoiceId,
          paymentAmount: amount,
          paymentMethod,
          referenceNumber,
          notes,
          createdAt: new Date(),
          paymentDate: new Date(),
        },
      });

      // Recalcular el saldo pendiente de la factura
      await this.recalculateInvoiceBalance(tenantId, invoiceId);

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
    invoiceId: string,
    remainingAmount: number = 0
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
        receivableStatus: remainingBalance <= 0 ? "paid" : "pending",
      },
    });

    // Actualizar el estado del pago inicial y el saldo restante del acuerdo de pago
    const paymentAgreement = await prisma.paymentAgreement.findFirst({
      where: {
        accountsReceivableId: invoiceId,
        accountsReceivable: { tenantId: tenantId },
      },
    });

    if (paymentAgreement) {
      const amountToApply = Math.min(
        paymentAgreement.initialPayment,
        remainingAmount
      );

      await prisma.paymentAgreement.update({
        where: { id: paymentAgreement.id },
        data: {
          initialPaymentStatus:
            amountToApply === paymentAgreement.initialPayment
              ? "completed"
              : "pending",
          totalPaid: paymentAgreement.totalPaid + amountToApply,
        },
      });
    }
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
      + invoice.clientAbbAmount
      + invoice.adminCollectionAmount
      + invoice.adminAbbAmount;

    // Sumamos el monto de la factura con los fees
    const totalWithFees = invoice.invoiceAmount + totalFees;

    const payments = await prisma.paymentDetail.findMany({
      where: { accountsReceivableId: invoiceId },
    });

    const totalPaid = payments.reduce(
      (sum, payment) => sum + payment.paymentAmount,
      0
    );

    if (totalPaid >= totalWithFees) {
      await prisma.accountsReceivable.update({
        where: { id: invoiceId },
        data: {
          receivableStatus: "paid",
          remainingBalance: 0,
        },
      });
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

    // Apply to administrative fees (cobranza)
    if (remainingAmount > 0) {
      const amountToApply = Math.min(invoice.adminCollectionAmount, remainingAmount); // ABB va al dueño del sistema
      paymentApplications.push({
        paymentDetailId,
        accountsReceivableId: invoice.id,
        amountApplied: amountToApply,
        appliedTo: "ADMIN_COLLECTION_FEE", // Categorizado como ABB_FEE
      });
      remainingAmount -= amountToApply;
    }

    // Apply to admin ABB fee (intereses de mora)
    if (remainingAmount > 0) {
      const amountToApply = Math.min(invoice.adminAbbAmount, remainingAmount);
      paymentApplications.push({
        paymentDetailId,
        accountsReceivableId: invoice.id,
        amountApplied: amountToApply,
        appliedTo: "ADMIN_ABB_FEE", // Categorizado como INTEREST (intereses de mora)
      });
      remainingAmount -= amountToApply;
    }

    // Apply to capital (capital original)
    if (remainingAmount > 0) {
      const amountToApply = Math.min(invoice.invoiceAmount, remainingAmount);
      paymentApplications.push({
        paymentDetailId,
        accountsReceivableId: invoice.id,
        amountApplied: amountToApply,
        appliedTo: "CAPITAL", // Categorizado como CAPITAL (pago al cliente)
      });
      remainingAmount -= amountToApply;
    }

    // Apply to interest (intereses de mora)
    if (remainingAmount > 0) {
      if (invoice.interestFrozenAmount) {
        const amountToApply = Math.min(invoice.interestFrozenAmount, remainingAmount);
        paymentApplications.push({
          paymentDetailId,
          accountsReceivableId: invoice.id,
          amountApplied: amountToApply,
          appliedTo: "INTEREST", // Categorizado como INTEREST (intereses de mora)
        });
        remainingAmount -= amountToApply;
      }
    }

    // Apply to client collection fee (cobranza)
    if (remainingAmount > 0) {
      const amountToApply = Math.min(invoice.clientCollectionAmount, remainingAmount);
      paymentApplications.push({
        paymentDetailId,
        accountsReceivableId: invoice.id,
        amountApplied: amountToApply,
        appliedTo: "CLIENT_COLLECTION_FEE", // Categorizado como CLIENT_COLLECTION_FEE
      });
      remainingAmount -= amountToApply;
    }
    // Apply to client ABB fee (intereses de mora)
    if (remainingAmount > 0) {
      const amountToApply = Math.min(invoice.clientAbbAmount, remainingAmount);
      paymentApplications.push({
        paymentDetailId,
        accountsReceivableId: invoice.id,
        amountApplied: amountToApply,
        appliedTo: "CLIENT_ABB_FEE", // Categorizado como CLIENT_ABB_FEE
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
    tenanId: string,
    invoiceId: string,
    initialPayment: number,
    numberOfInstallments: number,
    validityPeriodInDays: number
  ) {
    // Fetch the associated invoice
    const invoice = await prisma.accountsReceivable.findUnique({
      where: { id: invoiceId, tenantId: tenanId },
    });

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    const totalFees = invoice.clientCollectionAmount + invoice.clientAbbAmount;

    // Fetch tenant configuration to get the percentage of interest for collection
    const parameterID = process.env.PARAMETER_ID || "";
    const tenantConfig = await tenantConfigService.getTenantConfig(tenanId, parameterID);
    const porcInteresCobranza = tenantConfig.porcInteresCobranza || 0;
    // Calculate interest
    const { totalLateInterest } = calculateLateInterest(
      invoice.invoiceAmount,
      porcInteresCobranza,
      invoice.dueDate
    ); // Initialize the previous interest amount

    // Calculate the remaining balance after the initial payment
    const remainingBalance = invoice.invoiceAmount - initialPayment;

    if (remainingBalance < 0) {
      throw new Error("Initial payment exceeds invoice amount");
    }

    const totalAmount =
      invoice.invoiceAmount +
      totalFees +
      totalLateInterest -
      initialPayment;

    // Calculate the installment amount
    const installmentAmount = remainingBalance / numberOfInstallments;

    // Calculate the validity date for the payment agreement
    const validityDate = new Date();
    validityDate.setDate(validityDate.getDate() + validityPeriodInDays);

    // Create the payment agreement
    const paymentAgreement = await prisma.paymentAgreement.create({
      data: {
        accountsReceivableId: invoiceId,
        initialPayment: parseFloat(initialPayment.toFixed(2)),
        remainingBalance: parseFloat(remainingBalance.toFixed(2)),
        totalAmount: parseFloat((totalAmount).toFixed(2)),
        accumulatedInterest: parseFloat(totalLateInterest.toFixed(2)),
        numberOfInstallments,
        agreementExpirationDate: validityDate, // Added the missing property
        paymentStatus: "active",
        previousInterestAmount: parseFloat(totalLateInterest.toFixed(2)),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Create installments based on the number of installments
    for (let i = 1; i <= numberOfInstallments; i++) {
      const installmentDueDate = new Date();
      installmentDueDate.setMonth(installmentDueDate.getMonth() + i);

      await prisma.installment.create({
        data: {
          paymentAgreementId: paymentAgreement.id,
          installmentNumber: i,
          dueDate: installmentDueDate,
          amount: installmentAmount,
          paid: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    }

    // Update the invoice to link it with the payment agreement
    await prisma.accountsReceivable.update({
      where: { id: invoiceId },
      data: {
        paymentAgreementId: paymentAgreement.id,
      },
    });

    return { success: true, paymentAgreement };
  }
}

export const paymentsService = new PaymentsService();
