import { IExcelImportArray } from "../interfaces/accountsReceivable.interface";
import { debtorService } from "./debtor.service";
import { userService } from "./user.service";
import { prisma } from "../../index";
import { roleService } from "./role.service";
import { tenantService } from "./tenant.service";
import { ROLES } from "../../common/lib/constant";

class AccountsReceivableService {
  //
  async getParameterById(id: string) {
    const parameter = await prisma.globalParameter.findUnique({
      where: {
        id: id,
      },
    });

    return parameter;
  }

  async registerInvoices(tenantId: string, data: IExcelImportArray) {
    const transaction = await prisma.$transaction(async (prismaTransaction) => {
      // Validamos el tenant
      const tenant = await tenantService.validateTenantById(tenantId);

      console.log(data);
      // recorremos los datos
      for (const record of data) {
        try {
          let userId: string | null = null;
          let debtorId: string | null = null;

          // Validamos si el deudor ya existe como usuario
          const userExist = await userService.getUserByEmail(
            tenantId,
            record.debtorEmail
          );

          if (!userExist) {
            const roleInfo = await roleService.getRoleByName(ROLES.DEBTOR);

            const newUser = await prismaTransaction.user.create({
              data: {
                email: record.debtorEmail,
                fullname: record.debtorFullname,
                phone: record.debtorPhone,
                roleId: roleInfo.id,
                tenantId: tenant.id,
              },
            });

            userId = newUser.id;
          } else {
            userId = userExist.id;
          }

          if (!record.identification) {
            throw new Error(
              `Identification is required for debtor: ${record.debtorFullname}`
            );
          }

          const debtorExist = await debtorService
            .getDebtorInfo(
              tenant.id, // Ensure tenant.id is used instead of tenantId
              record.identification
            )
            .catch(() => null);
          // Check if the debtor already exists
          if (debtorExist) {
            debtorId = debtorExist.id;
          } else {
            // Create the debtor and link it to the user
            const newDebtor = await prismaTransaction.debtor.create({
              data: {
                tenantId: tenant.id,
                identification: record.identification!, // Use non-null assertion
                userId: userId,
                fullname: record.debtorFullname,
                email: record.debtorEmail,
                phone: record.debtorPhone,
                address: record.debtorAddress,
              },
            });

            debtorId = newDebtor.id;
            //   Generamos el envio de la invitacion al deudor
          }

          const invoice = await prismaTransaction.accountsReceivable.create({
            data: {
              tenantId: tenant.id,
              invoiceNumber: record.invoiceNumber,
              invoiceAmount: record.invoiceAmount,
              issueDate: new Date(record.issueDate),
              dueDate: new Date(record.dueDate),
              customerName: record.debtorFullname,
              customerAddress: record.debtorAddress,
              customerEmail: record.debtorEmail,
              customerPhone: record.debtorPhone,
              amountPaid: 0,
              outstandingBalance: record.invoiceAmount,
              receivableStatus: "pending",
              collectionStatus: "initial",
              notes: "",
              debtorId: debtorId,
            },
          });
          console.log(invoice);
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(
              `Error processing record: ${JSON.stringify(record)} - ${
                error.message
              }`
            );
          } else {
            throw new Error(
              `Error processing record: ${JSON.stringify(
                record
              )} - Unknown error`
            );
          }
        }
      }
    });

    return transaction;
  }
}

export const accountsReceivableService = new AccountsReceivableService();
