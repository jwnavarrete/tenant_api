import { Router } from "express";
import * as debtorContributionController from "../controllers/debtorContribution.controller";
import { validateTokenJwtMiddleware } from "../../middlewares/global/validateTokenJwt.middlewares";
import { validateBodyMiddleware } from "../../middlewares/global/validateBody.middleware";
import { validateQueryMiddleware } from "../../middlewares/global/validateQuery.middleware";
import {
  CreateDebtorContributionSchema,
  UpdateDebtorContributionStatusSchema,
  PartialCompanyContributionSchema,
  DebtorContributionStatusQuerySchema
} from "../schemas/debtorContribution.shemas";
export const debtorContributionRoutes: Router = Router();

// Crear una contribución
debtorContributionRoutes.post(
  "/",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(CreateDebtorContributionSchema),
  debtorContributionController.createDebtorContributionController
);

debtorContributionRoutes.patch(
  "/:id/company-info",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(PartialCompanyContributionSchema),
  debtorContributionController.addCompanyInfoToContributionController
);

// Obtener todas las contribuciones (admin)
debtorContributionRoutes.get(
  "/",
  validateTokenJwtMiddleware,
  validateQueryMiddleware(DebtorContributionStatusQuerySchema),
  debtorContributionController.getAllDebtorContributionsController
);

// Obtener contribuciones pendientes por empresa
debtorContributionRoutes.get(
  "/company",
  validateTokenJwtMiddleware,
  validateQueryMiddleware(DebtorContributionStatusQuerySchema),
  debtorContributionController.getDebtorContributionsByCompanyAndStatusController
);

// Validar o rechazar una contribución
debtorContributionRoutes.patch(
  "/:contributionId/status",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(UpdateDebtorContributionStatusSchema),
  debtorContributionController.updateDebtorContributionStatusController
);