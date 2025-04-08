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
  accountsReceivableControler.registerInvoices
);

accountsReceivableRoutes.post(
  "/",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(ExcelImportSchema),
  accountsReceivableControler.registerInvoice
);

accountsReceivableRoutes.get(
  "/",
  validateTokenJwtMiddleware,
  accountsReceivableControler.getAllInvoices
);

// delete invoice
accountsReceivableRoutes.delete(
  "/:id",
  validateTokenJwtMiddleware,
  accountsReceivableControler.deleteInvoice
);

accountsReceivableRoutes.post(
  "/:id/send-notification",
  validateTokenJwtMiddleware,
  accountsReceivableControler.sendNotification
);