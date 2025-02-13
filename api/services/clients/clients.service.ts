import { User } from "@prisma/client";
import { hash } from "bcryptjs";
import { AppError } from "@/errors";
import { prisma } from "@/index";
import * as clientsInterfaces from "@/interfaces/clients.interfaces";
import { generateAccessToken, generateRefreshToken } from "@/common/lib/sessions";
import {
  ClientReturnCreatedSchema,
  ClientCreateSchema,
} from "@/schemas/clients.schemas";
import { IuserTokenInfos, IUserToken } from "@/interfaces/users.interfaces";

const generateUniqueSubdomain = async (
  companyName: string
): Promise<string> => {
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
};

export const createClientsService = async (
  payload: clientsInterfaces.iClientCreateBody,
  newsId: string,
  userInfos: IuserTokenInfos
): Promise<string> => {
  return "";
  // Validar los datos de entrada
  // const validatedData = ClientCreateSchema.parse(payload);

  // const findEmailUser: User | null = await prisma.user.findUnique({
  //   where: {
  //     email: validatedData.user.email,
  //   },
  // });

  // if (findEmailUser) {
  //   throw new AppError("Email already exists", 409);
  // }

  // // Crear el Client, Tenant y User en una transacción
  // const result = await prisma.$transaction(async (prisma) => {
  //   // Crear el Client
  //   const client = await prisma.client.create({
  //     data: {
  //       name: validatedData.name,
  //       contactEmail: validatedData.contactEmail,
  //       phone: validatedData.phone,
  //       address: validatedData.address,
  //     },
  //   });

  //   const subdomain = await generateUniqueSubdomain(validatedData.name);
  //   // Crear el Tenant asociado al Client
  //   const tenant = await prisma.tenant.create({
  //     data: {
  //       subdomain: subdomain,
  //       clientId: client.id,
  //     },
  //   });

  //   // encriptar la contraseña
  //   validatedData.user.password = await hash(validatedData.user.password, 10);

  //   // Crear el User asociado al Tenant
  //   const user = await prisma.user.create({
  //     data: {
  //       email: validatedData.user.email,
  //       name: validatedData.user.name,
  //       password: validatedData.user.password, // Asegúrate de hashear la contraseña antes de guardarla
  //       tenantId: tenant.id,
  //     },
  //   });

  //   // Devolver el resultado
  //   return { client, tenant, user };
  // });

  // const paramToken: IUserToken = {
  //   id: result.user.id,
  //   email: result.user.email,
  //   tenantId: result.tenant.id,
  //   subdomain: result.tenant.subdomain,
  // };

  // const accessToken = generateAccessToken(paramToken);

  // const refreshToken = generateRefreshToken(paramToken);

  // // Formatear la respuesta
  // const response: clientsInterfaces.iClientCreateReturn = ClientReturnCreatedSchema.parse({
  //   id: result.client.id,
  //   name: result.client.name,
  //   contactEmail: result.client.contactEmail,
  //   phone: result.client.phone,
  //   address: result.client.address,
  //   tenant: {
  //     id: result.tenant.id,
  //     subdomain: result.tenant.subdomain,
  //     clientId: result.tenant.clientId,
  //     createdAt: result.tenant.createdAt,
  //     updatedAt: result.tenant.updatedAt,
  //   },
  //   user: {
  //     id: result.user.id,
  //     email: result.user.email,
  //     name: result.user.name,
  //     tenantId: result.user.tenantId,
  //     createdAt: result.user.createdAt,
  //     updatedAt: result.user.updatedAt,
  //   },
  //   createdAt: result.client.createdAt,
  //   updatedAt: result.client.updatedAt,
  //   accessToken: accessToken,
  //   refreshToken: refreshToken,
  // });

  // return response;
};
