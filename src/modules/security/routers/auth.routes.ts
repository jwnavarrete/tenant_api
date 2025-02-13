import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { validateBodyMiddleware } from "@/middlewares/global/validateBody.middleware";
import {
  AuthSignUpSchema,
  AuthTenantSchema,
  EmailTokenVerificationSchema,
  EmailVerifySchema,
  RefreshTokenSchema,
  ResendVerificationEmailSchema,
  SubdomainSchema,
} from "../schemas/auth.schemas";
import { validateTokenJwtMiddleware } from "@/middlewares/global/validateTokenJwt.middlewares";

export const authRoutes: Router = Router();

authRoutes.post(
  "/signup/",
  validateBodyMiddleware(AuthSignUpSchema),
  authController.authSignUpController
);

authRoutes.post(
  "/validate-subdomain/",
  validateBodyMiddleware(SubdomainSchema),
  authController.authValidaSubdomainController
);

authRoutes.post(
  "/refresh-token/",
  validateBodyMiddleware(RefreshTokenSchema),
  authController.AuthRefreshTokenController
);

authRoutes.post(
  "/signin/",
  validateBodyMiddleware(AuthTenantSchema),
  authController.AuthSingInController
);

authRoutes.post(
  "/verify-email/",
  validateBodyMiddleware(EmailTokenVerificationSchema),
  authController.AuthVerifyEmailController
);

authRoutes.post(
  "/resend-verification-email/",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(ResendVerificationEmailSchema),
  authController.AuthResendVerificationEmailController
);

authRoutes.post(
  "/validate-email/",
  validateBodyMiddleware(EmailVerifySchema),
  authController.AuthCheckEmailExistsController
);