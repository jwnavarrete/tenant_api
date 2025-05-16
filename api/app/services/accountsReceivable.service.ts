import {
  IExcelImport,
  IExcelImportArray,
  IInvoiceResponse,
} from "../interfaces/accountsReceivable.interface";
import { debtorService } from "./debtor.service";
import { calculateLateInterest } from "../../../api/common/lib/general";
import { prisma } from "../../index";
import { roleService } from "./role.service";
import { tenantService } from "./tenant.service";
import { tenantConfigService } from "./tenantConfig.service";
import { COLLECTION_STATUS, ROLES } from "../../common/lib/constant";
import { InvoiceResponseSchema } from "../schemas/accountsReceivable.schemas";
import { notificationService } from "./Notification.service";
class AccountsReceivableService {
  //
  async registerAccountsReceivableBatch(
    tenantId: string,
    data: IExcelImportArray
  ) {
    await tenantService.validateTenantById(tenantId);
    const transaction = await prisma.$transaction(async (prismaTransaction) => {
      const tenantConfig = await tenantConfigService.getTenantConfigsByTenantId(
        tenantId
      );

      for (const record of data) {
        this.saveAccountsReceivableEntry(
          tenantId,
          record,
          tenantConfig.parameter.porcCobranza,
          tenantConfig.parameter.porcAbb
        );
      }
    });

    console.log("Transaction completed successfully:", transaction);
    return "Invoices imported successfully";
  }

  async registerAccountsReceivable(tenantId: string, data: IExcelImport) {
    await tenantService.validateTenantById(tenantId);
    const tenantConfig = await tenantConfigService.getTenantConfigsByTenantId(
      tenantId
    );
    const transaction = await prisma.$transaction(async (prismaTransaction) => {
      this.saveAccountsReceivableEntry(
        tenantId,
        data,
        tenantConfig.parameter.porcCobranza,
        tenantConfig.parameter.porcAbb
      );
    });

    console.log("Transaction completed successfully:", transaction);
    return "Invoice imported successfully";
  }

  async saveAccountsReceivableEntry(
    tenantId: string,
    data: IExcelImport,
    porcCobranza: number,
    porcAbb: number,
    prismaTransaction = prisma
  ) {
    try {
      let debtorId: string | null = null;

      if (!data.identification) {
        throw new Error(
          `Identification is required for debtor: ${data.debtorFullname}`
        );
      }

      // SI el deudor ya existe, lo buscamos por su identificacion
      if (data.debtorId) {
        debtorId = data.debtorId;

        const debtorExist = await debtorService
          .getDebtorById(tenantId, debtorId)
          .catch(() => null);

        if (!debtorExist) {
          throw new Error(
            `Debtor with ID ${debtorId} not found for tenant ${tenantId}`
          );
        }
      } else {
        // PRIMERO VALIDAMOS SI EL DEUDOR YA EXISTE COMO USUARIO
        const debtorExist = await debtorService
          .getDebtorInfo(
            tenantId, // Ensure tenant.id is used instead of tenantId
            data.identification
          )
          .catch(() => null);

        // Validamos si el deudor ya existe
        if (debtorExist) {
          debtorId = debtorExist.id;
        } else {
          // Si no existe, lo creamos como usuario
          const roleInfo = await roleService.getRoleByName(ROLES.DEBTOR);

          const newUser = await prismaTransaction.user.create({
            data: {
              email: data.debtorEmail,
              fullname: data.debtorFullname,
              phone: data.debtorPhone,
              roleId: roleInfo.id,
              tenantId: tenantId,
            },
          });

          // Create the debtor and link it to the user
          const newDebtor = await prismaTransaction.debtor.create({
            data: {
              tenantId: tenantId,
              identification: data.identification!, // Use non-null assertion
              userId: newUser.id,
              fullname: data.debtorFullname,
              email: data.debtorEmail,
              phone: data.debtorPhone,
              address: data.debtorAddress,
            },
          });

          debtorId = newDebtor.id;
        }
      }

      // Client collection and abb amounts
      const clientCollectionAmount = (data.invoiceAmount * porcCobranza) / 100;
      const clientAbbAmount = (clientCollectionAmount * porcAbb) / 100;
      // Set the admin collection and abb amounts to 0 initially
      const adminCollectionAmount = (data.invoiceAmount * porcCobranza) / 100;
      const adminAbbAmount = (adminCollectionAmount * porcAbb) / 100;

      // Fetch tenant configuration to get the percentage of interest for collection
      const parameterID = process.env.PARAMETER_ID || "";
      const tenantConfig = await tenantConfigService.getTenantConfig(tenantId, parameterID);
      const porcInteresCobranza = tenantConfig.porcInteresCobranza || 0;

      // Interest and outstanding balance
      const { totalLateInterest } = calculateLateInterest(
        data.invoiceAmount,
        porcInteresCobranza,
        new Date(data.dueDate)
      );
      const interest = parseFloat(totalLateInterest.toFixed(2));

      // totalDueToday, No calculate the admin collection and abb amounts
      const totalDueToday =
        data.invoiceAmount +
        clientCollectionAmount +
        clientAbbAmount + interest;

      // Validate the debtor data against the schema
      const invoice = await prismaTransaction.accountsReceivable.create({
        data: {
          tenantId: tenantId,
          invoiceNumber: data.invoiceNumber,
          invoiceAmount: data.invoiceAmount,
          issueDate: new Date(data.issueDate),
          dueDate: new Date(data.dueDate),
          customerName: data.debtorFullname,
          customerAddress: data.debtorAddress,
          customerEmail: data.debtorEmail,
          customerPhone: data.debtorPhone,
          amountPaid: 0,
          remainingBalance: data.invoiceAmount,
          receivableStatus: "pending",
          collectionStatus: COLLECTION_STATUS.INITIAL,
          // Interest calculation
          previousInterestAmount: interest,
          // Set the client collection and abb amounts
          clientCollectionPercentage: porcCobranza,
          clientCollectionAmount,
          clientAbbPercentage: porcAbb,
          clientAbbAmount,
          // Set the admin collection and abb amounts
          adminCollectionPercentage: porcCobranza,
          adminCollectionAmount,
          adminAbbPercentage: porcAbb,
          totalDueToday,
          adminAbbAmount,
          // 
          notes: "",
          debtorId: debtorId,
        },
      });
      // console.log(invoice);

      // Send notification to the debtor
      // const result = await notificationService.sendNotification(
      //   tenantId,
      //   invoice.id
      // );
      // console.log("Notification sent successfully:", result);

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `Error processing data: ${JSON.stringify(data)} - ${error.message}`
        );
      } else {
        throw new Error(
          `Error processing data: ${JSON.stringify(data)} - Unknown error`
        );
      }
    }
  }

  async getAllReceivables(tenantId: string) {
    const invoices = await prisma.accountsReceivable.findMany({
      where: {
        tenantId: tenantId,
      },
      include: {
        debtor: true,
        paymentDetail: true,
        paymentAgreement: {
          include: {
            Installments: true,
          },
        },
      },
    });

    return invoices;
  }

  async getReceivableById(invoiceId: string): Promise<IInvoiceResponse> {
    const invoice = await prisma.accountsReceivable.findFirst({
      where: {
        id: invoiceId,
      },
      include: {
        debtor: {
          include: {
            user: true,
          },
        },
        paymentDetail: true,
      },
    });

    if (!invoice) {
      throw new Error("Invoice not found");
    }
    // Validate the invoice with the schema
    return InvoiceResponseSchema.parse(invoice);
  }

  async updateReceivable(invoiceId: string, data: any) {
    const invoice = await prisma.accountsReceivable.update({
      where: {
        id: invoiceId,
      },
      data: {
        ...data,
      },
    });

    return invoice;
  }

  async deleteReceivable(invoiceId: string) {
    // Check if the invoice exists
    const exist = await this.getReceivableById(invoiceId);

    if (!exist) {
      throw new Error("Invoice not found");
    }

    const invoice = await prisma.accountsReceivable.delete({
      where: {
        id: invoiceId,
      },
    });

    return invoice;
  }

  // Get invoices by debtor ID
  async getReceivablesByUser(tenantId: string, userId: string) {
    const invoices = await prisma.accountsReceivable.findMany({
      where: {
        tenantId: tenantId,
        debtor: {
          userId: userId,
        },
      },
      include: {
        debtor: {
          include: {
            user: true,
          },
        },
        paymentDetail: true,
        paymentAgreement: {
          include: {
            Installments: true,
          },
        },
      },
    });

    // Fetch tenant configuration to get the percentage of interest for collection
    const parameterID = process.env.PARAMETER_ID || "";
    const tenantConfig = await tenantConfigService.getTenantConfig(tenantId, parameterID);
    const porcInteresCobranza = tenantConfig.porcInteresCobranza || 0;

    // Calculate the interest and total due today for each invoice
    const invoicesWithCalculations = invoices.map((invoice) => {
      let interest = 0;
      let outstandingBalance = 0;
      let initialPayment = 0;

      // Total client Fees
      const totalFees = invoice.clientCollectionAmount + invoice.clientAbbAmount;

      const amountPaid =
        invoice.paymentDetail?.reduce((acc, p) => acc + p.paymentAmount, 0) ||
        0;

      // console.log("hasPaymentAgreement:", invoice.hasPaymentAgreement);
      if (invoice.hasPaymentAgreement) {
        interest = invoice.paymentAgreement?.previousInterestAmount || 0;

        console.log("paymentAgreement:", invoice.paymentAgreement);
        if (invoice.paymentAgreement?.initialPaymentStatus === "completed") {
          initialPayment = invoice.paymentAgreement?.initialPayment || 0;
        }

      } else {
        // Calculate the outstanding balance
        outstandingBalance = invoice.invoiceAmount - amountPaid;

        // Calculate the outstanding balance
        const { totalLateInterest } = calculateLateInterest(
          outstandingBalance,
          porcInteresCobranza,
          invoice.dueDate
        );

        interest = parseFloat(totalLateInterest.toFixed(2));
      }

      const feesInterest = totalFees + interest;
      const remainingBalance = invoice.invoiceAmount - amountPaid;

      const totalDueToday = remainingBalance + feesInterest;

      const details = [
        {
          invoiceAmount: `$${invoice.invoiceAmount.toFixed(2)}`,
          amountPaid: `$${amountPaid.toFixed(2)}`,
          collectionPercentage: `${invoice.clientCollectionPercentage}%`,
          collectionAmount: `$${invoice.clientCollectionAmount.toFixed(2)}`,
          abbPercentage: `${invoice.clientAbbPercentage}%`,
          abbAmount: `$${invoice.clientAbbAmount.toFixed(2)}`,
          fees: `$${totalFees.toFixed(2)}`,
          interest: `$${interest.toFixed(2)}`,
          totalDueToday: `$${totalDueToday.toFixed(2)}`,
        },
      ];

      return {
        ...invoice,
        totalFees,
        interest,
        amountPaid,
        remainingBalance,
        totalDueToday,
        feesInterest,
        // details
      };
    });

    return invoicesWithCalculations;
  }

  async registerPeyment(
    invoiceId: string,
    amount: number,
    paymentMethod: string,
    paymentType: string,
    referenceNumber: string,
    notes: string
  ) {
    const invoice = await this.getReceivableById(invoiceId);

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    const paymentDetail = await prisma.paymentDetail.create({
      data: {
        accountsReceivableId: invoiceId,
        paymentDate: new Date(),
        paymentAmount: amount,
        paymentMethod: paymentMethod,
        referenceNumber: referenceNumber,
        notes: notes,
      },
    });

    return paymentDetail;
  }
}

export const accountsReceivableService = new AccountsReceivableService();
