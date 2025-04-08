import {
  IExcelImport,
  IExcelImportArray,
} from "../interfaces/accountsReceivable.interface";
import { debtorService } from "./debtor.service";
import { userService } from "./user.service";
import { prisma } from "../../index";
import { roleService } from "./role.service";
import { tenantService } from "./tenant.service";
import { tenantConfigService } from "./tenantConfig.service";
import { ROLES } from "../../common/lib/constant";

class AccountsReceivableService {
  //
  async registerInvoices(tenantId: string, data: IExcelImportArray) {
    await tenantService.validateTenantById(tenantId);
    const transaction = await prisma.$transaction(async (prismaTransaction) => {
      const tenantConfig = await tenantConfigService.getTenantConfigsByTenantId(
        tenantId
      );

      for (const record of data) {
        this.saveInvoice(
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

  async registerInvoice(tenantId: string, data: IExcelImport) {
    await tenantService.validateTenantById(tenantId);
    const tenantConfig = await tenantConfigService.getTenantConfigsByTenantId(
      tenantId
    );
    const transaction = await prisma.$transaction(async (prismaTransaction) => {
      this.saveInvoice(
        tenantId,
        data,
        tenantConfig.parameter.porcCobranza,
        tenantConfig.parameter.porcAbb
      );
    });
    console.log("Transaction completed successfully:", transaction);
    return "Invoice imported successfully";
  }

  async saveInvoice(
    tenantId: string,
    data: IExcelImport,
    porcCobranza: number,
    porcAbb: number,
    prismaTransaction = prisma
  ) {
    try {
      let userId: string | null = null;
      let debtorId: string | null = null;

      // Validamos si el deudor ya existe como usuario
      const userExist = await userService.getUserByEmail(
        tenantId,
        data.debtorEmail
      );

      if (!userExist) {
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

        userId = newUser.id;
      } else {
        userId = userExist.id;
      }

      if (!data.identification) {
        throw new Error(
          `Identification is required for debtor: ${data.debtorFullname}`
        );
      }

      const debtorExist = await debtorService
        .getDebtorInfo(
          tenantId, // Ensure tenant.id is used instead of tenantId
          data.identification
        )
        .catch(() => null);

      console.log("deudor", debtorExist);
      // Check if the debtor already exists
      if (debtorExist) {
        debtorId = debtorExist.id;
      } else {
        // Create the debtor and link it to the user
        const newDebtor = await prismaTransaction.debtor.create({
          data: {
            tenantId: tenantId,
            identification: data.identification!, // Use non-null assertion
            userId: userId,
            fullname: data.debtorFullname,
            email: data.debtorEmail,
            phone: data.debtorPhone,
            address: data.debtorAddress,
          },
        });

        debtorId = newDebtor.id;
        //   Generamos el envio de la invitacion al deudor
      }

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
          outstandingBalance: data.invoiceAmount,
          receivableStatus: "pending",
          collectionStatus: "Aanmaning",
          collectionPercentage: porcCobranza,
          abbPercentage: porcAbb,
          notes: "",
          debtorId: debtorId,
        },
      });
      console.log(invoice);
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

  async getAllInvoices(tenantId: string) {
    const invoices = await prisma.accountsReceivable.findMany({
      where: {
        tenantId: tenantId,
      },
      include: {
        debtor: true,
        paymentDetail: true,
      },
    });

    return invoices;
  }

  async getInvoiceById(invoiceId: string) {
    const invoice = await prisma.accountsReceivable.findFirst({
      where: {
        id: invoiceId,
      },
      include: {
        debtor: true,
        paymentDetail: true,
      },
    });

    return invoice;
  }

  async updateInvoice(invoiceId: string, data: any) {
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

  async deleteInvoice(invoiceId: string) {
    // Check if the invoice exists
    const exist = await this.getInvoiceById(invoiceId);

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
}

export const accountsReceivableService = new AccountsReceivableService();
