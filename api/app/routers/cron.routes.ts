import { Router } from "express";
import * as cronController from "../controllers/cron.controller";
import { validateTokenJwtMiddleware } from "../../middlewares/global/validateTokenJwt.middlewares";

export const cronRoutes: Router = Router();

cronRoutes.post(
  "/process-notifications",
  // validateTokenJwtMiddleware,
  cronController.processNotificationsController
);

cronRoutes.post(
  "/pending-notifications",
  // validateTokenJwtMiddleware,
  cronController.sendPendingNotificationsController
);