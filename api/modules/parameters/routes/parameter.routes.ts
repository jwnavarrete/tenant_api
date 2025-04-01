import { Router } from "express";
import * as parameterController from "../controllers/parameter.controller";
import { validateBodyMiddleware } from "../../../middlewares/global/validateBody.middleware";
import { paramGeneralSchema } from "../schemas/parameter.schema";

export const parameterRoutes: Router = Router();

parameterRoutes.post(
  "/",
  validateBodyMiddleware(paramGeneralSchema),
  parameterController.createParamController
);

parameterRoutes.patch(
  "/:id",
  validateBodyMiddleware(paramGeneralSchema),
  parameterController.updateParamController
);

parameterRoutes.get(
  "/:id",
  parameterController.getParamController
);
