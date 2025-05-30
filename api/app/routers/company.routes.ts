import { Router } from "express";
import * as companyController from "../controllers/company.controller";
import { validateBodyMiddleware } from "../../middlewares/global/validateBody.middleware";
import { validateTokenJwtMiddleware } from "../../middlewares/global/validateTokenJwt.middlewares";
import { InvitationCampanySchema } from "../schemas/company.schemas";

export const companyRoutes: Router = Router();

companyRoutes.post(
  "/invite",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(InvitationCampanySchema),
  companyController.createinvitationCompany
);


companyRoutes.get(
  "/invite/:token",
  companyController.getInvitationCompanyByToken
);

companyRoutes.get(
  "/invite",
  validateTokenJwtMiddleware,
  companyController.getAllInvitationByUserId
);

companyRoutes.patch(
  "/invite/:id/cancel",
  validateTokenJwtMiddleware,
  companyController.cancelInvitationCompany
);

companyRoutes.post(
  "/invite/:id/resend",
  validateTokenJwtMiddleware,
  companyController.resendInvitationCompany
);

// companyRoutes.patch(
//   "/invite/:id/accept",
//   validateTokenJwtMiddleware,
//   companyController.acceptInvitationCompany
// );




