import { Router } from "express";
import * as paymentsController from "../controllers/payments.controller";
import { validateBodyMiddleware } from "../../middlewares/global/validateBody.middleware";
import { validateTokenJwtMiddleware } from "../../middlewares/global/validateTokenJwt.middlewares";
import {
  RegisterPaymentAgreementSchema,
  RegisterPaymentSchema,
} from "../schemas/Payments.schemas";

export const paymentsRoutes: Router = Router();

paymentsRoutes.post(
  "/register-payment-agreement/",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(RegisterPaymentAgreementSchema),
  paymentsController.registerPaymentAgreementController
);

paymentsRoutes.post(
  "/register-payment/",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(RegisterPaymentSchema),
  paymentsController.registerPaymentController
);
