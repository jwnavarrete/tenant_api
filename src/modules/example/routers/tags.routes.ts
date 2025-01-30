import { Router } from "express";
import * as tagsController from "../controllers/tags.controller";
import { validateBodyMiddleware } from "@/middlewares/global/validateBody.middleware";
import { validateTokenJwtMiddleware } from "@/middlewares/global/validateTokenJwt.middlewares";
import { validatePermissionUserAdminMiddleware } from "@/middlewares/global/validateUserAdmin.middleware";
import { validateNewsOwnerdMiddleware } from "@/middlewares/news/validateNewsOwner.middleware";
import { validateTagIdMiddleware } from "@/middlewares/tags/validateTagId.middleware";
import { CreateTagsSchema } from "../schemas/tags.schemas";

export const tagsRoutes: Router = Router();

tagsRoutes.post(
  "",
  validateTokenJwtMiddleware,
  validateBodyMiddleware(CreateTagsSchema),
  tagsController.createTagsController
);

tagsRoutes.get("", tagsController.retrieveTagsController);

tagsRoutes.delete(
  "/:id/",
  validateTokenJwtMiddleware,
  validatePermissionUserAdminMiddleware,
  validateTagIdMiddleware,
  tagsController.deleteTagsController
);

tagsRoutes.post(
  "/news/:id/",
  validateTokenJwtMiddleware,
  validateNewsOwnerdMiddleware,
  validateBodyMiddleware(CreateTagsSchema),
  tagsController.addTagsInNewsController
);

tagsRoutes.delete(
  "/:tagId/news/:newsId/",
  validateTokenJwtMiddleware,
  validateNewsOwnerdMiddleware,
  validateTagIdMiddleware,
  tagsController.removeTagsInNewsController
);
