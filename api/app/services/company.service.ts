import { prisma } from "../../index";
import { InvitationCompany, ICompanyResponse } from "../interfaces/company.interface";
import { CompanySchema, InvitationCampanySchema } from "../schemas/company.schemas";
import { tenantService } from "./tenant.service";
import { generateInvitationTokenCompany, decodeCompanyToken } from "../../common/lib/sessions";
import { AuthMailService } from "../../common/Mail";




class CompanyService {

  async createInvitationCompany(
    tenantId: string,
    company: InvitationCompany
  ): Promise<ICompanyResponse> {

    console.log("tenantId", tenantId);

    const tentanInfo = await tenantService.validateTenantById(tenantId);
    console.log("tentanInfo", tentanInfo.clientId);

    let subdomain = company.invitedCompany.toLowerCase().replace(/\s+/g, "-")

    const companyExist = await tenantService.validaSubdomain(subdomain);


    if (companyExist) {
      throw new Error(
        `The subdomain ${subdomain} already exists, please choose another one.`
      );
    }
    const tokenCompany = generateInvitationTokenCompany({
      invitedEmail: company.invitedEmail,
      invitedCompany: company.invitedCompany,
      country: company.country,
    });

    const expirationDays = parseInt(process.env.INVITATION_EXPIRATION_DAYS || "7", 10);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + expirationDays);


    const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("Zona horaria detectada:", systemTimeZone);

    const newInvitationCompany = await prisma.companyInvitation.create({
      data: {
        invitedEmail: company.invitedEmail,
        invitedCompany: subdomain,
        country: company.country,
        invitingCompanyId: tentanInfo.clientId, // Foreign key to the inviting company (can be Client.id)
        invitationToken: tokenCompany,
        expiresAt: expiresAt, // Set expiration to 24 hours from now
        status: "PENDING", // Set status to "PENDING" initially
      },
    });

    console.log("generlo el link")
    const generateGuestCompanyLink = await this.generateEmailRegisterLink(newInvitationCompany.id, tokenCompany);

    console.log("envio el correo")

    AuthMailService.sendInvitationCompanyEmail(
      company.invitedEmail,
      company.invitedCompany || "",
      tentanInfo.subdomain,
      generateGuestCompanyLink
    );

    console.log("demora en enviar el correo")

    // // Validate the debtor data against the schema
    const parsedCompany = CompanySchema.parse(newInvitationCompany);

    return parsedCompany as ICompanyResponse;

  }




  private async generateEmailRegisterLink(invitedCompany: string, tokenCompany: string): Promise<string> {
    const exists = await prisma.companyInvitation.findUnique({
      where: { id: invitedCompany }
    });

    if (!exists) {
      throw new Error("Company not found");
    }

    const verificationLink = `https://auth.${process.env.APP_DOMAIN}/auth/sign_up_new?token=${tokenCompany}`;

    return verificationLink;
  }


  async validateCompanyByToken(token: string): Promise<InvitationCompany> {
    try {
      // Decodifica y valida el token (firma y expiración)
      const decoded = decodeCompanyToken(token);

      // Valida los datos del token contra el esquema
      const parsedInvitation = InvitationCampanySchema.parse({
        invitedEmail: decoded.invitedEmail,
        invitedCompany: decoded.invitedCompany,
        country: decoded.country,
      });

      return parsedInvitation as InvitationCompany;

    } catch (error: any) {
      // Propaga el mensaje original del error lanzado por decodeCompanyToken
      throw new Error(error.message || "Error decoding token");
    }
  }


  async getCompanyInvitesByUserId(userId: string): Promise<ICompanyResponse[]> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        tenant: {
          select: {
            client: {
              select: {
                companyInvites: true,
              },
            },
          },
        },
      },
    });

    return user?.tenant?.client?.companyInvites ?? [];
  }

  async cancelCompanyInvitation(invitationId: string): Promise<boolean> {
    const updated = await prisma.companyInvitation.updateMany({
      where: {
        id: invitationId,
        status: { not: "CANCELLED" }, // Evita actualizar si ya está cancelado
      },
      data: {
        status: "CANCELLED",
      },
    });

    return updated.count > 0;
  }

  // async resendCompanyInvitation(tenantId: string, invitationId: string): Promise<boolean> {
  //   const invitation = await prisma.companyInvitation.findUnique({
  //     where: { id: invitationId },
  //   });

  //   if (!invitation) return false;

  //   if (invitation.status !== "EXPIRED" && invitation.status !== "PENDING") {
  //     return false;
  //   }

  //   // Generar nuevo token
  //   const tokenCompany = generateInvitationTokenCompany({
  //     invitedEmail: invitation.invitedEmail,
  //     invitedCompany: invitation.invitedCompany,
  //     country: invitation.country,
  //   });

  //   const generateGuestCompanyLink = await this.generateEmailRegisterLink(invitation.id, tokenCompany);
  //   console.log("ibtengo el link:", generateGuestCompanyLink)

  //   // Calcular nueva fecha de expiración
  //   const expirationDays = parseInt(process.env.INVITATION_EXPIRATION_DAYS || "7", 10);
  //   const newExpiresAt = new Date();
  //   newExpiresAt.setDate(newExpiresAt.getDate() + expirationDays);

  //   // Actualizar la invitación en la base de datos
  //   await prisma.companyInvitation.update({
  //     where: { id: invitation.id },
  //     data: {
  //       invitationToken: tokenCompany,
  //       sentAt: new Date(),
  //       expiresAt: newExpiresAt,
  //       status: "PENDING",
  //     },
  //   });

  //   const tentanInfo = await tenantService.validateTenantById(tenantId);
  //   await AuthMailService.sendInvitationCompanyEmail(
  //     invitation.invitedEmail,
  //     invitation.invitedCompany,
  //     tentanInfo.subdomain,
  //     generateGuestCompanyLink
  //   );

  //   return true;
  // }

  async resendCompanyInvitation(tenantId: string, invitationId: string): Promise<boolean> {
    const invitation = await prisma.companyInvitation.findUnique({
      where: { id: invitationId },
    });

    if (!invitation) return false;

    if (invitation.status !== "EXPIRED" && invitation.status !== "PENDING") {
      return false;
    }


    // Generar nuevo token
    const tokenCompany = generateInvitationTokenCompany({
      invitedEmail: invitation.invitedEmail,
      invitedCompany: invitation.invitedCompany,
      country: invitation.country,
    });

    const expirationDays = parseInt(process.env.INVITATION_EXPIRATION_DAYS || "7", 10);
    const newExpiresAt = new Date();
    newExpiresAt.setDate(newExpiresAt.getDate() + expirationDays);

    await prisma.companyInvitation.update({
      where: { id: invitation.id },
      data: {
        invitationToken: tokenCompany,
        sentAt: new Date(),
        expiresAt: newExpiresAt,
        status: "PENDING",
      },
    });

    const generateGuestCompanyLink = await this.generateEmailRegisterLink(invitation.id, tokenCompany);
    console.log("obtengo el link:", generateGuestCompanyLink);

    const tenantInfo = await tenantService.validateTenantById(tenantId);

    // ✅ Primero se envía el correo
    AuthMailService.sendInvitationCompanyEmail(
      invitation.invitedEmail,
      invitation.invitedCompany,
      tenantInfo.subdomain,
      generateGuestCompanyLink
    );



    return true;
  }


}

export const companyService = new CompanyService();
