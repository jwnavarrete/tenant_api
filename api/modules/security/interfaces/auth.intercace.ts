import { z } from "zod";
import {
  AuthUserSchema,
  AuthCompanySchema,
  AuthSignUpSchema,
  SubdomainSchema,
  AuthUsersResponseSchema,
  RefreshTokenSchema,
  AuthTenantSchema,
  IdTokenSchema,
  AuthResponseSchema,
  EmailTokenVerificationSchema,
  ResendVerificationEmailSchema,
  EmailVerificationResponseSchema,
} from "../schemas/auth.schemas";

// Tipos inferidos
export type iAuthUser = z.infer<typeof AuthUserSchema>;
export type iAuthUserResponse = z.infer<typeof AuthUsersResponseSchema>;
export type iAuthCompany = z.infer<typeof AuthCompanySchema>;
export type iAuthTenantSignUp = z.infer<typeof AuthSignUpSchema>;
export type iAuthResponse = z.infer<typeof AuthResponseSchema>;
export type iSubdomain = z.infer<typeof SubdomainSchema>;
export type iRefreshToken = z.infer<typeof RefreshTokenSchema>;
export type iSignInTenant = z.infer<typeof AuthTenantSchema>;
export type iIdToken = z.infer<typeof IdTokenSchema>;
export type iEmailTokenVerification = z.infer<typeof EmailTokenVerificationSchema>;
export type iResendVerificationEmail = z.infer<typeof ResendVerificationEmailSchema>;
export type iEmailVerificationResponse = z.infer<typeof EmailVerificationResponseSchema>;

export interface IUserToken {
  email: string;
  tenantId: string;
  subdomain: string;
  role: string;
  id: string;
}

export interface IuserTokenInfos {
  exp: number;
  email: string;
  role: string;
  tenantId: string;
  subdomain: string;
  type: string;
  sub: string;
}
