import { Router } from "express";
import * as newsController from "../controllers/news.controller";
import { validateBodyMiddleware } from "@/middlewares/global/validateBody.middleware";
import { validateTokenJwtMiddleware } from "@/middlewares/global/validateTokenJwt.middlewares";
import { validateNewsOwnerdMiddleware } from "@/middlewares/news/validateNewsOwner.middleware";
import { NewsCreateSchema, NewsUpdateSchema } from "../schemas/news.schemas";

export const newsRoutes: Router = Router();

newsRoutes.post(
  "",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(NewsCreateSchema),
  newsController.createNewsController
);

newsRoutes.get("", newsController.retrieveNewsController);

newsRoutes.get(
  "/users/",
  validateTokenJwtMiddleware,
  newsController.retrieveNewsByUserIdController
);

newsRoutes.get("/:id/", newsController.retrieveNewsByIdController);

newsRoutes.delete(
  "/:id/",
  validateTokenJwtMiddleware,
  validateNewsOwnerdMiddleware,
  newsController.deleteNewsController
);

newsRoutes.patch(
  "/:id/",
  validateTokenJwtMiddleware,
  validateNewsOwnerdMiddleware,
  validateBodyMiddleware(NewsUpdateSchema),
  newsController.updateNewsController
);
