"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVerifySchema = exports.EmailVerificationResponseSchema = exports.ResendVerificationEmailSchema = exports.EmailTokenVerificationSchema = exports.IdTokenSchema = exports.AuthTenantSchema = exports.RefreshTokenSchema = exports.SubdomainSchema = exports.AuthResponseSchema = exports.AuthUsersResponseSchema = exports.AuthSignUpSchema = exports.AuthCompanySchema = exports.AuthUserSchema = void 0;
const zod_1 = require("zod");
const SubdomainSchema = zod_1.z.object({
    subdomain: zod_1.z.string().max(50),
});
exports.SubdomainSchema = SubdomainSchema;
const RefreshTokenSchema = zod_1.z.object({
    refreshToken: zod_1.z.string(),
});
exports.RefreshTokenSchema = RefreshTokenSchema;
const AuthTenantSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    subdomain: zod_1.z.string(),
});
exports.AuthTenantSchema = AuthTenantSchema;
const AuthUserSchema = zod_1.z.object({
    fullname: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    phone: zod_1.z.string(),
    country: zod_1.z.string(),
    typeIdentification: zod_1.z.string(),
    identification: zod_1.z.string(),
});
exports.AuthUserSchema = AuthUserSchema;
const AuthUsersResponseSchema = AuthUserSchema.omit({ password: true });
exports.AuthUsersResponseSchema = AuthUsersResponseSchema;
const AuthCompanySchema = zod_1.z.object({
    name: zod_1.z.string(),
    contactEmail: zod_1.z.string().email(),
    kvk: zod_1.z.string(),
    address: zod_1.z.string(),
    country: zod_1.z.string(),
    type: zod_1.z.string(),
    numberOfEmployees: zod_1.z.enum([
        "1-5",
        "10-20",
        "20-30",
        "40-50",
        "50-100",
        "100+",
    ]),
    termsAccepted: zod_1.z.boolean(),
});
exports.AuthCompanySchema = AuthCompanySchema;
const AuthSignUpSchema = zod_1.z.object({
    user: AuthUserSchema,
    company: AuthCompanySchema,
});
exports.AuthSignUpSchema = AuthSignUpSchema;
// Esquema para la respuesta después de crear el Client
const AuthResponseSchema = zod_1.z.object({
    accessToken: zod_1.z.string(), // Token de acceso
    refreshToken: zod_1.z.string(), // Token de refresco
    idToken: zod_1.z.string(), // Token de identificación
});
exports.AuthResponseSchema = AuthResponseSchema;
const IdTokenSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    fullname: zod_1.z.string(),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string(),
    country: zod_1.z.string(),
    typeIdentification: zod_1.z.string(),
    identification: zod_1.z.string(),
    tenantId: zod_1.z.string(),
    subdomain: zod_1.z.string(),
    role: zod_1.z.string(),
    emailVerified: zod_1.z.boolean(),
});
exports.IdTokenSchema = IdTokenSchema;
const EmailVerifySchema = zod_1.z.object({
    email: zod_1.z.string().email(),
});
exports.EmailVerifySchema = EmailVerifySchema;
const EmailTokenVerificationSchema = zod_1.z.object({
    token: zod_1.z.string(),
});
exports.EmailTokenVerificationSchema = EmailTokenVerificationSchema;
const ResendVerificationEmailSchema = zod_1.z.object({
    userId: zod_1.z.string(),
});
exports.ResendVerificationEmailSchema = ResendVerificationEmailSchema;
const EmailVerificationResponseSchema = zod_1.z.object({
    sub: zod_1.z.string().uuid(),
    fullname: zod_1.z.string(),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string(),
    country: zod_1.z.string(),
    typeIdentification: zod_1.z.string(),
    identification: zod_1.z.string(),
    tenantId: zod_1.z.string(),
    subdomain: zod_1.z.string(),
    role: zod_1.z.string(),
    emailVerified: zod_1.z.boolean(),
});
exports.EmailVerificationResponseSchema = EmailVerificationResponseSchema;
