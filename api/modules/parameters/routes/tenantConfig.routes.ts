import { Router } from "express";
import * as tenantConfigController from "../controllers/tenantConfig.controller";
import { validateBodyMiddleware } from "../../../middlewares/global/validateBody.middleware";
import { paramCobroSchema } from "../schemas/tenantConfig.schema";
import { validateTokenJwtMiddleware } from "../../../middlewares/global/validateTokenJwt.middlewares";

export const tenantConfigRoutes: Router = Router();

tenantConfigRoutes.patch(
  "/:parameterId/tenant-config",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(paramCobroSchema),
  tenantConfigController.updateTenantConfig
);

tenantConfigRoutes.get(
  "/:parameterId/tenant-config",
  validateTokenJwtMiddleware,
  tenantConfigController.getTenantConfig
);
