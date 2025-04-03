import { prisma } from "../../index";
import { DebtorSchema } from "../schemas/debtor.schemas";
import { IDebtor, IRegisterDebtor } from "../interfaces/debtor.interface";
import { userService } from "./user.service";
import { ROLES } from "../../common/lib/constant";
import { roleService } from "./role.service";

class DebtorService {
  async getDebtorInfo(
    tenantId: string,
    identification: string
  ): Promise<IDebtor> {
    const debtor = await prisma.debtor.findFirst({
      where: {
        tenantId: tenantId,
        identification: identification,
      },
      include: {
        user: true, // Assuming there is a relation named 'user' in the Prisma schema
      },
    });

    if (!debtor) {
      throw new Error(
        `Debtor with ID ${identification} not found for tenant ${tenantId}`
      );
    }

    // Validate the debtor data against the schema
    const parsedDebtor = DebtorSchema.parse(debtor);

    // Ensure the return type matches IDebtor
    return parsedDebtor as IDebtor;
  }

  async createDebtorIfNotExists(
    tenantId: string,
    debtor: IRegisterDebtor
  ): Promise<IDebtor> {
    let userId: string | null = null;

    // Check if the debtor already exists
    const existingDebtor = await this.getDebtorInfo(
      tenantId,
      debtor.identification
    ).catch(() => null);

    if (existingDebtor) {
      return existingDebtor as IDebtor;
    }

    const userExist = await userService.getUserByEmail(tenantId, debtor.email);

    if (!userExist) {
      // OBTENEMOS EL ROL DE DEUDOR
      const roleInfo = await roleService.getRoleByName(ROLES.DEBTOR);

      const newUser = await prisma.user.create({
        data: {
          email: debtor.email,
          fullname: debtor.fullname,
          phone: debtor.phone,
          roleId: roleInfo.id,
          tenantId: tenantId,
        },
      });
      userId = newUser.id;
    } else {
      userId = userExist.id;
    }

    // Create the debtor and link it to the user
    const newDebtor = await prisma.debtor.create({
      data: {
        tenantId: tenantId,
        identification: debtor.identification,
        userId: userId, // Assuming the debtor has a userId field to link to the user
        fullname: debtor.fullname,
        email: debtor.email,
        phone: debtor.phone,
        address: debtor.address,
        employeeId: debtor.employeeId,
      },
    });

    // Validate the debtor data against the schema
    const parsedDebtor = DebtorSchema.parse(newDebtor);

    // Ensure the return type matches IDebtor
    return parsedDebtor as IDebtor;
  }
}

export const debtorService = new DebtorService();
