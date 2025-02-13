import { Router } from "express";
import * as clientsContoller from "@/controllers/clients.controller";
import { validateCommentOwnerdMiddleware } from "@/middlewares/comments/validateCommentOwner.middleware";
import { validateBodyMiddleware } from "@/middlewares/global/validateBody.middleware";
import { validateTokenJwtMiddleware } from "@/middlewares/global/validateTokenJwt.middlewares";
import { validateNewsIdMiddleware } from "@/middlewares/news/validateNewsId.middleware";
import { ClientCreateSchema } from "@/schemas/clients.schemas";

export const clientsRoutes: Router = Router();

clientsRoutes.post(
  "/register/",
//   validateTokenJwtMiddleware,
//   validateNewsIdMiddleware,
  validateBodyMiddleware(ClientCreateSchema),
  clientsContoller.createClientsController
);
