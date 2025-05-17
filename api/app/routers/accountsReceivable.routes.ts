import { Router } from "express";
import * as accountsReceivableControler from "../controllers/accountsReceivable.controller";
import { validateBodyMiddleware } from "../../middlewares/global/validateBody.middleware";
import {
  ExcelImportSchema,
  ExcelImportSchemaArray,
} from "../schemas/accountsReceivable.schemas";
import { validateTokenJwtMiddleware } from "../../middlewares/global/validateTokenJwt.middlewares";

export const accountsReceivableRoutes: Router = Router();

accountsReceivableRoutes.post(
  "/import-invoices",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(ExcelImportSchemaArray),
  accountsReceivableControler.registerAccountsReceivables
);

accountsReceivableRoutes.post(
  "/",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(ExcelImportSchema),
  accountsReceivableControler.registerAccountReceivable
);

accountsReceivableRoutes.get(
  "/",
  validateTokenJwtMiddleware,
  accountsReceivableControler.getAllReceivables
);

// delete invoice
accountsReceivableRoutes.delete(
  "/:id",
  validateTokenJwtMiddleware,
  accountsReceivableControler.deleteReceivable
);

accountsReceivableRoutes.post(
  "/:id/send-notification",
  validateTokenJwtMiddleware,
  accountsReceivableControler.sendNotificationController
);

accountsReceivableRoutes.get(
  "/by-user",
  validateTokenJwtMiddleware,
  accountsReceivableControler.getReceivablesByUser
);
