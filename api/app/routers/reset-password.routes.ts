import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { validateBodyMiddleware } from "../../middlewares/global/validateBody.middleware";
import { ResetPasswordSchema, ResetPasswordTokenSchema, SendResetPasswordSchema } from "../schemas/reset-password.schemas";

export const resetPassword: Router = Router();

resetPassword.post(
  "/send-email/",
  validateBodyMiddleware(SendResetPasswordSchema),
  authController.sendResetPasswordEmailController
);

resetPassword.post(
  "/verify-token/",
  validateBodyMiddleware(ResetPasswordTokenSchema),
  authController.validateResetPasswordTokenController
);

resetPassword.post(
  "/update-password/",
  validateBodyMiddleware(ResetPasswordSchema),
  authController.resetPasswordController
);
