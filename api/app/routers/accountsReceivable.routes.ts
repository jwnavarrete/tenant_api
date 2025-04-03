import { Router } from "express";
import * as accountsReceivableControler from "../controllers/accountsReceivable.controller";
import { validateBodyMiddleware } from "../../middlewares/global/validateBody.middleware";
import { ExcelImportSchemaArray } from "../schemas/accountsReceivable.schemas";
import { validateTokenJwtMiddleware } from "../../middlewares/global/validateTokenJwt.middlewares";

export const accountsReceivableRoutes: Router = Router();

accountsReceivableRoutes.post(
  "/import-invoices",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(ExcelImportSchemaArray),
  accountsReceivableControler.registerInvoices
);
