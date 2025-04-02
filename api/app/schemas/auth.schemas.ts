import { z } from "zod";

const SubdomainSchema = z.object({
  subdomain: z.string().max(50),
});

const RefreshTokenSchema = z.object({
  refreshToken: z.string(),
});

const AuthTenantSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  subdomain: z.string(),
});

const AuthUserSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string(),
  country: z.string(),
  typeIdentification: z.string(),
  identification: z.string(),
});

const AuthUsersResponseSchema = AuthUserSchema.omit({ password: true });

const AuthCompanySchema = z.object({
  name: z.string(),
  contactEmail: z.string().email(),
  kvk: z.string(),
  address: z.string(),
  country: z.string(),
  type: z.string(),
  numberOfEmployees: z.enum([
    "1-5",
    "10-20",
    "20-30",
    "40-50",
    "50-100",
    "100+",
  ]),
  termsAccepted: z.boolean(),
});

const AuthSignUpSchema = z.object({
  user: AuthUserSchema,
  company: AuthCompanySchema,
});

// Esquema para la respuesta después de crear el Client
const AuthResponseSchema = z.object({
  accessToken: z.string(), // Token de acceso
  refreshToken: z.string(), // Token de refresco
  idToken: z.string(), // Token de identificación
});

const IdTokenSchema = z.object({
  id: z.string().uuid(),
  fullname: z.string(),
  email: z.string().email(),
  phone: z.string(),
  country: z.string(),
  typeIdentification: z.string(),
  identification: z.string(),
  tenantId: z.string(),
  subdomain: z.string(),
  company: z.string(),
  role: z.string(),
  emailVerified: z.boolean(),
});

const EmailVerifySchema = z.object({
  email: z.string().email(),
});

const EmailTokenVerificationSchema = z.object({
  token: z.string(),
});

const MagicLoginSchema = z.object({
  token: z.string(),
});

const ResendVerificationEmailSchema = z.object({
  userId: z.string(),
});

const EmailVerificationResponseSchema = z.object({
  sub: z.string().uuid(),
  fullname: z.string(),
  email: z.string().email(),
  phone: z.string(),
  country: z.string(),
  typeIdentification: z.string(),
  identification: z.string(),
  tenantId: z.string(),
  subdomain: z.string(),
  role: z.string(),
  emailVerified: z.boolean(),
});

export {
  AuthUserSchema,
  AuthCompanySchema,
  AuthSignUpSchema,
  // RESPONSE SCHEMAS
  AuthUsersResponseSchema,
  AuthResponseSchema,
  // Exportamos el esquema de subdominio
  SubdomainSchema,
  RefreshTokenSchema,
  AuthTenantSchema,
  IdTokenSchema,
  EmailTokenVerificationSchema,
  ResendVerificationEmailSchema,
  EmailVerificationResponseSchema,
  EmailVerifySchema,
  MagicLoginSchema,  
};
