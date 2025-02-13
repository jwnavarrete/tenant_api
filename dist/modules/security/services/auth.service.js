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
exports.emailExists = exports.resendVerificationEmail = exports.signIn = exports.refreshToken = exports.validaSubdomain = exports.validaEmailVerificationToken = exports.signUp = void 0;
const bcryptjs_1 = require("bcryptjs");
const bcryptjs_2 = require("bcryptjs");
const server_1 = require("@/server");
const sessions_1 = require("@/common/lib/sessions");
const auth_schemas_1 = require("../schemas/auth.schemas");
const Mail_1 = require("@/common/Mail");
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
const signUp = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Validar los datos de entrada
    console.log("payload", payload);
    const validatedData = auth_schemas_1.AuthSignUpSchema.parse(payload);
    const TENANT_ADMIN_ROLE = process.env.TENANT_ADMIN_ROLE || "";
    // Crear el Client, Tenant y User en una transacción
    const result = yield server_1.prisma.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
        // BUSCAR EL ROL TENANT_ADMIN_ROLE
        const role = yield prisma.role.findUnique({
            where: { name: TENANT_ADMIN_ROLE },
        });
        if (!role) {
            throw new Error(`Role with name ${TENANT_ADMIN_ROLE} not found`);
        }
        // Crear el Client
        const client = yield prisma.client.create({
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
        const subdomain = yield generateUniqueSubdomain(validatedData.company.name);
        // Crear el Tenant asociado al Client
        const tenant = yield prisma.tenant.create({
            data: {
                subdomain: subdomain,
                clientId: client.id,
            },
        });
        // encriptar la contraseña
        validatedData.user.password = yield (0, bcryptjs_1.hash)(validatedData.user.password, 10);
        // Crear el User asociado al Tenant
        const user = yield prisma.user.create({
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
            },
        });
        const user_role = yield prisma.userRole.create({
            data: {
                userId: user.id,
                roleId: role.id,
            },
        });
        // Devolver el resultado
        return { client, tenant, user, user_role };
    }));
    const paramToken = {
        id: result.user.id,
        email: result.user.email,
        tenantId: result.tenant.id,
        subdomain: result.tenant.subdomain,
        role: TENANT_ADMIN_ROLE,
    };
    const paramIdToken = {
        id: result.user.id,
        fullname: result.user.fullname,
        email: result.user.email,
        phone: result.user.phone,
        country: result.user.country,
        typeIdentification: result.user.typeIdentification,
        identification: result.user.identification,
        tenantId: result.user.tenantId,
        subdomain: result.tenant.subdomain,
        role: TENANT_ADMIN_ROLE,
        emailVerified: result.user.emailVerified,
    };
    const accessToken = (0, sessions_1.generateAccessToken)(paramToken);
    const refreshToken = (0, sessions_1.generateRefreshToken)(paramToken);
    const idToken = (0, sessions_1.generateIdToken)(paramIdToken);
    Mail_1.AuthMailService.sendWelcomeEmail(result.user.email, result.user.fullname);
    const verificationLink = yield generateEmailVerificationLink(result.user.id);
    Mail_1.AuthMailService.sendVerificationEmail(result.user.email, verificationLink);
    const response = auth_schemas_1.AuthResponseSchema.parse({
        accessToken: accessToken,
        refreshToken: refreshToken,
        idToken: idToken,
    });
    return response;
});
exports.signUp = signUp;
const validaEmailVerificationToken = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const verify = (0, sessions_1.verifyEmailVerificationToken)(payload.token);
    if (!verify || !verify.id || !verify.email) {
        throw new Error("Invalid token");
    }
    const user = yield server_1.prisma.user.findUnique({
        where: { id: verify.id },
    });
    if (!user || user.verificationToken !== payload.token) {
        throw new Error("Invalid token or user not found");
    }
    yield server_1.prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: true, verificationToken: null },
    });
    return true;
});
exports.validaEmailVerificationToken = validaEmailVerificationToken;
const validaSubdomain = (subdomain) => __awaiter(void 0, void 0, void 0, function* () {
    if (!subdomain) {
        throw new Error("Subdomain is required");
    }
    const exists = yield server_1.prisma.tenant.findUnique({
        where: { subdomain },
    });
    return !!exists;
});
exports.validaSubdomain = validaSubdomain;
const refreshToken = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = (0, sessions_1.verifyRefreshToken)(refreshToken);
    console.log("payload", payload);
    if (!payload.sub) {
        throw new Error("Invalid token payload");
    }
    const user = yield server_1.prisma.user.findUnique({
        where: { id: payload.sub },
        include: {
            tenant: true,
            roles: {
                include: {
                    role: true,
                },
            },
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    if (user.roles.length === 0) {
        throw new Error("User has no roles assigned");
    }
    // user.tenantId
    const paramToken = {
        id: user.id,
        email: user.email,
        tenantId: user.tenantId,
        subdomain: user.tenant.subdomain,
        role: user.roles[0].role.name,
    };
    const accessToken = (0, sessions_1.generateAccessToken)(paramToken);
    const newRefreshToken = (0, sessions_1.generateRefreshToken)(paramToken);
    return { accessToken, refreshToken: newRefreshToken };
});
exports.refreshToken = refreshToken;
const signIn = (param) => __awaiter(void 0, void 0, void 0, function* () {
    const tenatn = yield server_1.prisma.tenant.findUnique({
        where: { subdomain: param.subdomain },
    });
    if (!tenatn) {
        throw new Error("Tenant not found");
    }
    const user = yield server_1.prisma.user.findUnique({
        where: {
            tenantId_email: {
                tenantId: tenatn.id,
                email: param.email,
            },
        },
        include: {
            tenant: true,
            roles: {
                include: {
                    role: true,
                },
            },
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    // const validPassword = await compare(password, user.password);
    const validPassword = yield (0, bcryptjs_2.compare)(param.password, user.password);
    if (!validPassword) {
        throw new Error("Invalid password");
    }
    const paramToken = {
        id: user.id,
        email: user.email,
        tenantId: user.tenantId,
        subdomain: user.tenant.subdomain,
        role: user.roles[0].role.name,
    };
    const paramIdToken = {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        country: user.country,
        typeIdentification: user.typeIdentification,
        identification: user.identification,
        tenantId: user.tenantId,
        subdomain: user.tenant.subdomain,
        role: user.roles[0].role.name,
        emailVerified: user.emailVerified,
    };
    const accessToken = (0, sessions_1.generateAccessToken)(paramToken);
    const refreshToken = (0, sessions_1.generateRefreshToken)(paramToken);
    const idToken = (0, sessions_1.generateIdToken)(paramIdToken);
    console.log("User Email:", user.email);
    console.log("User Fullname:", user.fullname);
    const response = auth_schemas_1.AuthResponseSchema.parse({
        accessToken: accessToken,
        refreshToken: refreshToken,
        idToken: idToken,
    });
    return response;
});
exports.signIn = signIn;
const resendVerificationEmail = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield server_1.prisma.user.findUnique({
        where: { id: payload.userId },
    });
    if (!user) {
        throw new Error("User not found");
    }
    if (user.emailVerified) {
        throw new Error("Email is already verified");
    }
    const verificationLink = yield generateEmailVerificationLink(user.id);
    Mail_1.AuthMailService.sendVerificationEmail(user.email, verificationLink);
});
exports.resendVerificationEmail = resendVerificationEmail;
const generateEmailVerificationLink = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield server_1.prisma.user.findUnique({
        where: { id: userId },
        include: { tenant: true },
    });
    if (!user) {
        throw new Error("User not found");
    }
    const token = (0, sessions_1.generateMagicLoginToken)({
        id: user.id,
        email: user.email,
        tenant: user.tenant.id,
    });
    const verificationLink = `https://${user.tenant.subdomain}.${process.env.APP_DOMAIN}/auth/magic_link_login?path=email_confirmed&token=${token}&dl_userid=${user.id}&dl_slug=${user.tenant.subdomain}`;
    yield server_1.prisma.user.update({
        where: { id: user.id },
        data: { verificationToken: token },
    });
    return verificationLink;
});
const emailExists = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email) {
        throw new Error("Email is required");
    }
    const user = yield server_1.prisma.user.findFirst({
        where: { email: email },
    });
    return !!user;
});
exports.emailExists = emailExists;
const generateEmailRecuperationLinks = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener todos los tenants y usuarios relacionados en una sola consulta
    const tenantsWithUsers = yield server_1.prisma.tenant.findMany({
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
            console.warn(`No se encontró ningún usuario con el email ${email} en el tenant ${tenant.subdomain}`);
            return []; // Si no hay usuarios, retornar un array vacío
        }
        // Generar un enlace para cada usuario en el tenant
        return tenant.users.map((user) => {
            const token = (0, sessions_1.generateMagicLoginToken)({
                id: user.id,
                email: user.email,
                tenant: tenant.id,
            });
            const link = `https://${tenant.subdomain}.tudominio.com/recuperar?token=${token}`;
            return {
                subdomain: tenant.subdomain,
                link: link,
            };
        });
    });
    // Si no se generaron enlaces, lanzar un error o manejarlo
    if (links.length === 0) {
        throw new Error(`No se encontró ningún usuario con el email ${email} en ningún tenant`);
    }
    // Devolver la lista de enlaces y subdominios
    return links;
});
