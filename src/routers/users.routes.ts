import { Router } from "express";
import * as userController from "@/controllers/users.controller";
import { validateBodyMiddleware } from "@/middlewares/global/validateBody.middleware";
import { validatePermissionUserIdMiddleware } from "@/middlewares/users/validatePermissionUserId.middlewares";
import { validateTokenJwtMiddleware } from "@/middlewares/global/validateTokenJwt.middlewares";
import * as userSchemas from "@/schemas/users.schemas";
import { validatePermissionUserAdminMiddleware } from "@/middlewares/global/validateUserAdmin.middleware";
import { validateUserIdMiddleware } from "@/middlewares/users/validateUserIdmiddleware";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  validateBodyMiddleware(userSchemas.UserCreateSchema),
  userController.createUsersController
);

usersRoutes.post(
  "/login/",
  validateBodyMiddleware(userSchemas.UserLoginSchema),
  userController.loginUsersController
);

usersRoutes.post(
  "/login/refresh-token/",
  validateBodyMiddleware(userSchemas.UserLoginRefreshSchema),
  userController.loginRefreshUsersController
);

usersRoutes.get(
  "/",
  validateTokenJwtMiddleware,
  validatePermissionUserAdminMiddleware,
  userController.retrieveUsersController
);

usersRoutes.get(
  "/profile/:id/",
  validateTokenJwtMiddleware,
  validatePermissionUserIdMiddleware,
  validateUserIdMiddleware,
  userController.retrieveProfileUserContoller
);

usersRoutes.delete(
  "/:id/",
  validateTokenJwtMiddleware,
  validatePermissionUserIdMiddleware,
  validateUserIdMiddleware,
  userController.deleteUserController
);

usersRoutes.patch(
  "/:id/",
  validateTokenJwtMiddleware,
  validatePermissionUserIdMiddleware,
  validateUserIdMiddleware,
  validateBodyMiddleware(userSchemas.UserUpdateSchema),
  userController.updateUserController
);
