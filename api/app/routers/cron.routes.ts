import { Router } from "express";
import * as cronController from "../controllers/cron.controller";
import { validateTokenJwtMiddleware } from "../../middlewares/global/validateTokenJwt.middlewares";

export const cronRoutes: Router = Router();

cronRoutes.post(
  "/notificacion-invoices",
  // validateTokenJwtMiddleware,
  cronController.sendCronNotificacionInvoicesController
);