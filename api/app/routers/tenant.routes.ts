import { Router } from "express";
import * as tenantController from "../controllers/tenant.controller";
import { validateQueryMiddleware } from "../../middlewares/global/validateQuery.middleware";
import { QuerySchema } from "../schemas/tenant.schemas";
import { validateTokenJwtMiddleware } from "../../middlewares/global/validateTokenJwt.middlewares";

export const tenantRoutes: Router = Router();

tenantRoutes.get(
  "/",
  validateTokenJwtMiddleware,
  validateQueryMiddleware(QuerySchema),
  tenantController.getAllTenant
);
