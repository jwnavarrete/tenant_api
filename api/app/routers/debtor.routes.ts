import { Router } from "express";
import * as debtorController from "../controllers/debtor.controller";
import { validateTokenJwtMiddleware } from "../../middlewares/global/validateTokenJwt.middlewares";

export const debtorRoutes: Router = Router();

debtorRoutes.get(
  "/",
  validateTokenJwtMiddleware,
  debtorController.getAllDebtorsController
);

debtorRoutes.get(
  "/:id",
  validateTokenJwtMiddleware,
  debtorController.getDebtorByIdController
);

debtorRoutes.post(
  "/",
  validateTokenJwtMiddleware,
  debtorController.createDebtorController
);

debtorRoutes.patch(
  "/:id",
  validateTokenJwtMiddleware,
  debtorController.updateDebtorController
);
