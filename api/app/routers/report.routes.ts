import { Router } from "express";
import * as debtorController from "../controllers/debtor.controller";
import * as reportController from "../controllers/report.controller";
import { validateTokenJwtMiddleware } from "../../middlewares/global/validateTokenJwt.middlewares";

export const reportRoutes: Router = Router();

reportRoutes.post(
  "/:invoiceId/payment-agreement-report",
//   validateTokenJwtMiddleware,
  reportController.paymentAgreementReportController
);
