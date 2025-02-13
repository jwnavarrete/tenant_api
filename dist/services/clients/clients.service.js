"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientsService = void 0;
const server_1 = require("@/server");
const generateUniqueSubdomain = (companyName) => __awaiter(void 0, void 0, void 0, function* () {
    let subdomain = companyName.toLowerCase().replace(/\s+/g, "-");
    let exists = yield server_1.prisma.tenant.findUnique({
        where: { subdomain },
    });
    let suffix = 1;
    while (exists) {
        subdomain = `${companyName.toLowerCase().replace(/\s+/g, "-")}-${suffix}`;
        exists = yield server_1.prisma.tenant.findUnique({
            where: { subdomain },
        });
        suffix++;
    }
    return subdomain;
});
const createClientsService = (payload, newsId, userInfos) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.createClientsService = createClientsService;
