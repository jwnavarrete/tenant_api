import { hash } from "bcryptjs";
import { compare } from "bcryptjs";
import { prisma } from "../../index";
import {
  generateAccessToken,
  generateMagicLoginToken,
  generateIdToken,
  generateRefreshToken,
  verifyEmailVerificationToken,
  verifyRefreshToken,
  verifyMagicLoginToken,
} from "../../common/lib/sessions";

import {
  IAccountUrl,
  iAccountUrls,
  iAuthResponse,
  iAuthTenantSignUp,
  iEmailTokenVerification,
  iIdToken,
  iResendVerificationEmail,
  iSignInTenant,
  IUserToken,
} from "../interfaces/auth.intercace";
import { AuthResponseSchema, AuthSignUpSchema } from "../schemas/auth.schemas";
import { AuthMailService } from "../../common/Mail";
import { CLIENT_STATUS } from "../../common/lib/constant";

class AuthService {
  async generateUniqueSubdomain(companyName: string): Promise<string> {
    let subdomain = companyName.toLowerCase().replace(/\s+/g, "-");
    let exists = await prisma.tenant.findUnique({
      where: { subdomain },
    });

    let suffix = 1;
    while (exists) {
      subdomain = `${companyName.toLowerCase().replace(/\s+/g, "-")}-${suffix}`;
      exists = await prisma.tenant.findUnique({
        where: { subdomain },
      });
      suffix++;
    }

    return subdomain;
  }

  async signUp(payload: iAuthTenantSignUp): Promise<iAuthResponse> {
    // Validar los datos de entrada
    const validatedData = AuthSignUpSchema.parse(payload);
    const TENANT_ADMIN_ROLE = process.env.TENANT_ADMIN_ROLE || "";

    // Crear el Client, Tenant y User en una transacción
    const result = await prisma.$transaction(async (prisma) => {
      // BUSCAR EL ROL TENANT_ADMIN_ROLE
      const role = await prisma.role.findUnique({
        where: { name: TENANT_ADMIN_ROLE },
      });

      if (!role) {
        throw new Error(`Role with name ${TENANT_ADMIN_ROLE} not found`);
      }

      // Crear el Client
      const client = await prisma.client.create({
        data: {
          name: validatedData.company.name,
          contactEmail: validatedData.company.contactEmail,
          kvk: validatedData.company.kvk,
          country: validatedData.company.country,
          address: validatedData.company.address,
          type: validatedData.company.type,
          numberOfEmployees: validatedData.company.numberOfEmployees,
          termsAccepted: validatedData.company.termsAccepted, // or set this value based on your logic
        },
      });

      const subdomain = await this.generateUniqueSubdomain(
        validatedData.company.name
      );
      // Crear el Tenant asociado al Client
      const tenant = await prisma.tenant.create({
        data: {
          subdomain: subdomain,
          clientId: client.id,
        },
      });

      // encriptar la contraseña
      validatedData.user.password = await hash(validatedData.user.password, 10);

      // Crear el User asociado al Tenant
      const user = await prisma.user.create({
        data: {
          email: validatedData.user.email,
          fullname: validatedData.user.fullname,
          password: validatedData.user.password, // Asegúrate de hashear la contraseña antes de guardarla
          country: validatedData.user.country, // Asegúrate de hashear la contraseña antes de guardarla
          phone: validatedData.user.phone, // Asegúrate de hashear la contraseña antes de guardarla
          typeIdentification: validatedData.user.typeIdentification, // Asegúrate de hashear la contraseña antes de guardarla
          identification: validatedData.user.identification, // Asegúrate de hashear la contraseña antes de guardarla
          tenantId: tenant.id,
          emailVerified: false,
          roleId: role.id,
        },
      });

      // AQUI CREAMOS LA CONFIGURACION INICIAL PARA EL TENANT
      await prisma.tenantConfig.create({
        data: {
          tenantId: tenant.id,
          parameterId: process.env.PARAMETER_ID || "",
          porcInteresCobranza: 0,
        },
      });

      // Devolver el resultado
      return { client, tenant, user };
    });

    const paramToken: IUserToken = {
      id: result.user.id,
      email: result.user.email,
      tenantId: result.tenant.id,
      subdomain: result.tenant.subdomain,
      role: TENANT_ADMIN_ROLE,
    };

    const paramIdToken: iIdToken = {
      id: result.user.id,
      fullname: result.user.fullname || "",
      email: result.user.email,
      phone: result.user.phone || "",
      country: result.user.country || "",
      typeIdentification: result.user.typeIdentification || "",
      identification: result.user.identification || "",
      tenantId: result.user.tenantId,
      subdomain: result.tenant.subdomain,
      company: result.client.name,
      role: TENANT_ADMIN_ROLE,
      emailVerified: result.user.emailVerified,
    };

    const accessToken = generateAccessToken(paramToken);
    const refreshToken = generateRefreshToken(paramToken);
    const idToken = generateIdToken(paramIdToken);

    AuthMailService.sendWelcomeEmail(
      result.user.email,
      result.user.fullname || ""
    );

    const verificationLink = await this.generateEmailVerificationLink(
      result.user.id
    );
    AuthMailService.sendVerificationEmail(result.user.email, verificationLink);

    const response: iAuthResponse = AuthResponseSchema.parse({
      accessToken: accessToken,
      refreshToken: refreshToken,
      idToken: idToken,
    });

    return response;
  }

  async validaEmailVerificationToken(
    payload: iEmailTokenVerification
  ): Promise<boolean> {
    const verify = verifyEmailVerificationToken(payload.token);

    if (!verify || !verify.id || !verify.email) {
      throw new Error("Invalid token");
    }

    const user = await prisma.user.findUnique({
      where: { id: verify.id },
    });

    if (!user || user.verificationToken !== payload.token) {
      throw new Error("Invalid token or user not found");
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
        verificationToken: null,
        joined: new Date(),
        status: CLIENT_STATUS.ACTIVE,
      },
    });

    return true;
  }

  async refreshToken(refreshToken: string): Promise<any> {
    const payload = verifyRefreshToken(refreshToken);

    if (!payload.sub) {
      throw new Error("Invalid token payload");
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
      include: {
        tenant: true,
        role: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const paramToken: IUserToken = {
      id: user.id,
      email: user.email,
      tenantId: user.tenantId,
      subdomain: user.tenant.subdomain,
      role: user.role.name,
    };

    const accessToken = generateAccessToken(paramToken);
    const newRefreshToken = generateRefreshToken(paramToken);

    return { accessToken, refreshToken: newRefreshToken };
  }

  public async signIn(param: iSignInTenant): Promise<iAuthResponse> {
    const tenatn = await prisma.tenant.findUnique({
      where: { subdomain: param.subdomain },
    });

    if (!tenatn) {
      throw new Error("Tenant not found");
    }

    const user = await prisma.user.findUnique({
      where: {
        tenantId_email: {
          tenantId: tenatn.id,
          email: param.email,
        },
      },
      include: {
        tenant: {
          include: {
            client: true,
          },
        },
        role: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.status !== CLIENT_STATUS.ACTIVE) {
      throw new Error("User is not active");
    }

    // const validPassword = await compare(password, user.password);
    const validPassword: boolean = await compare(
      param.password,
      user.password || ""
    );

    if (!validPassword) {
      throw new Error("Invalid password");
    }

    const paramToken: IUserToken = {
      id: user.id,
      email: user.email,
      tenantId: user.tenantId,
      subdomain: user.tenant.subdomain,
      role: user.role.name,
    };

    const paramIdToken: iIdToken = {
      id: user.id,
      fullname: user.fullname || "",
      email: user.email,
      phone: user.phone || "",
      country: user.country || "",
      typeIdentification: user.typeIdentification || "",
      identification: user.identification || "",
      tenantId: user.tenantId,
      subdomain: user.tenant.subdomain,
      company: user.tenant.client.name,
      role: user.role.name,
      emailVerified: user.emailVerified,
    };

    const accessToken = generateAccessToken(paramToken);
    const refreshToken = generateRefreshToken(paramToken);
    const idToken = generateIdToken(paramIdToken);

    const response: iAuthResponse = AuthResponseSchema.parse({
      accessToken: accessToken,
      refreshToken: refreshToken,
      idToken: idToken,
    });

    return response;
  }

  public async resendVerificationEmail(
    payload: iResendVerificationEmail
  ): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.emailVerified) {
      throw new Error("Email is already verified");
    }

    const verificationLink = await this.generateEmailVerificationLink(user.id);
    AuthMailService.sendVerificationEmail(user.email, verificationLink);
  }

  private async generateEmailVerificationLink(userId: string): Promise<string> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { tenant: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const token = generateMagicLoginToken({
      id: user.id,
      email: user.email,
      tenant: user.tenant.id,
    });

    const verificationLink = `https://${user.tenant.subdomain}.${process.env.APP_DOMAIN}/auth/magic_link_login?path=email_confirmed&token=${token}&dl_userid=${user.id}&dl_slug=${user.tenant.subdomain}`;

    await prisma.user.update({
      where: { id: user.id },
      data: { verificationToken: token },
    });

    return verificationLink;
  }

  public async emailExists(email: string): Promise<boolean> {
    if (!email) {
      throw new Error("Email is required");
    }

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    return !!user;
  }

  public async generateEmailRecuperationLinks(
    email: string
  ): Promise<iAccountUrls> {
    // Obtener todos los tenants y usuarios relacionados en una sola consulta
    const tenantsWithUsers = await prisma.tenant.findMany({
      select: {
        id: true,
        subdomain: true,
        client: {
          select: {
            name: true,
            type: true,
            kvk: true,
            contactEmail: true,
            numberOfEmployees: true,
            country: true,
            address: true,
          },
        },
        users: {
          where: {
            email: email,
          },
          select: {
            id: true,
            email: true,
          },
        },
      },
      where: {
        users: {
          some: {
            email: email,
          },
        },
      },
    });

    // Generar los enlaces de recuperación
    const links = tenantsWithUsers.flatMap((tenant) => {
      // Verificar si hay usuarios en este tenant
      if (tenant.users.length === 0) {
        console.warn(
          `No se encontró ningún usuario con el email ${email} en el tenant ${tenant.subdomain}`
        );
        return []; // Si no hay usuarios, retornar un array vacío
      }

      // Generar un enlace para cada usuario en el tenant
      return tenant.users.map((user) => {
        const token = generateMagicLoginToken({
          id: user.id,
          email: user.email,
          tenant: tenant.id,
        });

        const recoveryUrlLink = `https://${tenant.subdomain}.${process.env.APP_DOMAIN}/auth/magic_link_login?path=recovery_url&token=${token}&dl_userid=${user.id}&dl_slug=${tenant.subdomain}`;

        const account: IAccountUrl = {
          subdomain: tenant.subdomain,
          company: tenant.client.name,
          link: recoveryUrlLink,
        };

        return account;
      });
    });

    // Si no se generaron enlaces, lanzar un error o manejarlo
    if (links.length === 0) {
      throw new Error(
        `No se encontró ningún usuario con el email ${email} en ningún tenant`
      );
    }

    // Devolver la lista de enlaces y subdominios
    return links;
  }

  public async sendRecoveryUrl(email: string): Promise<void> {
    const accountUrls: iAccountUrls = await this.generateEmailRecuperationLinks(
      email
    );

    return AuthMailService.sendRecoveryUrl(email, accountUrls);
  }

  public async validateMagicLoginToken(token: string): Promise<iAuthResponse> {
    const payload = verifyMagicLoginToken(token);

    if (!payload || !payload.id || !payload.email || !payload.tenant) {
      throw new Error("Invalid token");
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.id, tenantId: payload.tenant },
      include: {
        tenant: {
          include: {
            client: true,
          },
        },
        role: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const paramToken: IUserToken = {
      id: user.id,
      email: user.email,
      tenantId: user.tenantId,
      subdomain: user.tenant.subdomain,
      role: user.role.name,
    };

    const paramIdToken: iIdToken = {
      id: user.id,
      fullname: user.fullname || "",
      email: user.email,
      phone: user.phone || "",
      country: user.country || "",
      typeIdentification: user.typeIdentification || "",
      identification: user.identification || "",
      tenantId: user.tenantId,
      subdomain: user.tenant.subdomain,
      company: user.tenant.client.name,
      role: user.role.name,
      emailVerified: user.emailVerified,
    };

    const accessToken = generateAccessToken(paramToken);
    const refreshToken = generateRefreshToken(paramToken);
    const idToken = generateIdToken(paramIdToken);

    const response: iAuthResponse = AuthResponseSchema.parse({
      accessToken: accessToken,
      refreshToken: refreshToken,
      idToken: idToken,
    });

    return response;
  }

  public async sendResetPasswordEmail(
    email: string,
    slug: string
  ): Promise<void> {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        tenant: {
          subdomain: slug,
        },
      },
      include: {
        tenant: {
          include: {
            client: true,
          },
        },
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (!user.emailVerified) {
      throw new Error("User email is not verified");
    }

    if (user.status !== CLIENT_STATUS.ACTIVE) {
      throw new Error("User is not active or is blocked");
    }

    const token = Math.random().toString(36).substring(2, 15);

    const recoveryUrlLink = `https://${slug}.${process.env.APP_DOMAIN}/auth/change-password?token=${token}&dl_userid=${user.id}`;

    await prisma.user.update({
      where: { id: user.id },
      data: { resetPasswordToken: token },
    });

    AuthMailService.sendResetPasswordEmail(email, recoveryUrlLink);
  }

  public async validateResetPasswordToken(
    token: string,
    userId: string
  ): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: { resetPasswordToken: token, id: userId },
    });

    if (!user) {
      throw new Error("Invalid token");
    }

    return true;
  }

  public async resetPassword(
    token: string,
    userId: string,
    password: string
  ): Promise<void> {
    const user = await prisma.user.findFirst({
      where: { resetPasswordToken: token, id: userId },
    });

    if (!user) {
      throw new Error("Invalid token");
    }

    const newPassword = await hash(password, 10);

    await prisma.user.update({
      where: { id: userId },
      data: { password: newPassword, resetPasswordToken: null },
    });
  }
}

export const authService = new AuthService();
