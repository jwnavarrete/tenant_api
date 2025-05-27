import {
  ICreateDebtorContribution,
  IDebtorContribution,
  IDebtorContributionStatusQuery,
  IPartialCompanyContribution,
  IUpdateDebtorContributionStatus
} from './../interfaces/DebtorContribution.interface';
import { prisma } from "../../index";
import { DebtorContributionSchema } from '../schemas/debtorContribution.shemas';
import { tenantService } from './tenant.service';
import { debtorService } from './debtor.service';
import { DebtorServiceMail } from "../../common/Mail";
import { clientService } from './client.service';

class DebtorContributionService {
  // Registrar una contribución
  async createContribution(tenantId: string, data: ICreateDebtorContribution): Promise<IDebtorContribution> {
    // Valudamos que el tenantId sea correcto
    const tenantInfo = await tenantService.validateTenantById(tenantId);
    // Valudamos que el debtorId sea correcto
    const debtorInfo = await debtorService.getDebtorById(tenantId, data.debtorId);

    const contribution = await prisma.debtorContribution.create({
      data: {
        ...data,
        companyId: tenantInfo.clientId,        
        verificationStatus: "pending",
      },
    });

    // Aqui debemos enviar un correo a todas las empresas para que contribuyan a identificar al deudor
    await this.sendContributionCompanies(debtorInfo.fullname, contribution.id);

    return DebtorContributionSchema.parse(contribution);
  }

  async addCompanyInfoToContribution(
    contributionId: string,
    payload: IPartialCompanyContribution
  ): Promise<IDebtorContribution> {
    const updated = await prisma.debtorContribution.update({
      where: { id: contributionId },
      data: {
        companyName: payload.companyName,
        companyContact: payload.companyContact,
        companyEmail: payload.companyEmail,
        companyPhone: payload.companyPhone,
        extraInfo: payload.extraInfo,
        verificationStatus: "contributed",
      },
    });

    return DebtorContributionSchema.parse(updated)
  }

  // Leer todas las contribuciones (admin)
  async getAllContributions(payload: IDebtorContributionStatusQuery): Promise<IDebtorContribution[]> {
    const contributions = await prisma.debtorContribution.findMany({
      where: {
        verificationStatus: payload.status,
      },
      include: {
        debtor: true,
        company: true,
        createdByUser: true,
      },
    });

    return contributions.map(contribution => DebtorContributionSchema.parse(contribution));
  }

  // Leer contribuciones hechas por la empresa y pendientes de validación
  async getContributionsByCompanyAndStatus(
    tenantId: string,
    payload: IDebtorContributionStatusQuery
  ): Promise<IDebtorContribution[]> {
    // Validamos que el tenantId sea correcto
    const tenantInfo = await tenantService.validateTenantById(tenantId);

    const contributions = await prisma.debtorContribution.findMany({
      where: {
        companyId: tenantInfo.clientId,
        verificationStatus: payload.status,
      },
      include: {
        debtor: true,
        company: true,
        createdByUser: true,
      },
    });

    return contributions.map(contribution => DebtorContributionSchema.parse(contribution));
  }

  // Validar o rechazar una contribución
  async updateContributionStatus(
    contributionId: string,
    payload: IUpdateDebtorContributionStatus
  ): Promise<IDebtorContribution> {
    const updated = await prisma.debtorContribution.update({
      where: { id: contributionId },
      data: {
        verificationStatus: payload.status,
        notes: payload.notes,
      },
    });
    return DebtorContributionSchema.parse(updated)
  }

  // Leer contribuciones por deudor
  async getContributionsByDebtor(debtorId: string): Promise<IDebtorContribution[]> {
    const contributions = await prisma.debtorContribution.findMany({
      where: { debtorId },
      include: {
        company: true,
        createdByUser: true,
      },
    });
    return contributions.map(contribution => DebtorContributionSchema.parse(contribution));
  }


  async sendContributionCompanies(debtorName: string, contributionId: string) {
    // Aquí debes obtener el tenantId de alguna manera, por ejemplo, pasándolo como argumento
    const companies = await clientService.getAll()
    console.log(`companies`, companies);
    for (const tenantInfo of companies) {

      const verificationLink = `https://${tenantInfo.tenant.subdomain}.${process.env.APP_DOMAIN}/collective-contributions?id=${contributionId}`;

      // console.log(`verificationLink`, verificationLink);
      // console.log(`tenantInfo`, tenantInfo);
      // console.log(`tenantInfo.clientEmail`, tenantInfo.contactEmail);
      // console.log(`tenantInfo.name`, tenantInfo.name);

      DebtorServiceMail.sendContribution(
        tenantInfo.contactEmail,
        tenantInfo.name,
        debtorName,
        verificationLink
      ).then(() => {
        console.log(`Email sent successfully to ${tenantInfo.contactEmail}`);
      }).catch((error) => {
        console.error(`Error sending email to ${tenantInfo.contactEmail}:`, error);
      });
    }
  }

}

export const debtorContributionService = new DebtorContributionService();
