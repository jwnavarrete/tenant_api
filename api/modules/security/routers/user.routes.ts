import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { validateTokenJwtMiddleware } from "../../../middlewares/global/validateTokenJwt.middlewares";
import { validatePermissionUserAdminMiddleware } from "../../../middlewares/global/validateUserAdmin.middleware";
import { validateQueryMiddleware } from "../../../middlewares/global/validateQuery.middleware";
import { QueryParamsSchema } from "../../../common/schemas/query.schemas";
import {
  InviteUserSchema,
  VerifyInvitationToken,
  RegisterInvitedUserSchema,
  UserIdSchema,
  ChangeRoleSchema,
  UserStatusSchema,
  UpdateUserSchema,
} from "../schemas/user.schemas";
import { validateBodyMiddleware } from "../../../middlewares/global/validateBody.middleware";
import { validateParamsMiddleware } from "../../../middlewares/global/validateParams.middleware";

export const userRoutes: Router = Router();

userRoutes.get(
  "/",
  validateTokenJwtMiddleware,
  validatePermissionUserAdminMiddleware,
  validateParamsMiddleware(QueryParamsSchema),
  userController.getUserController
);

userRoutes.patch(
  "/:userId/update",
  validateTokenJwtMiddleware,
  validatePermissionUserAdminMiddleware,
  validateParamsMiddleware(UserIdSchema),
  validateBodyMiddleware(UpdateUserSchema),
  userController.updateUserController
);

userRoutes.post(
  "/invite",
  validateTokenJwtMiddleware,
  validatePermissionUserAdminMiddleware,
  validateBodyMiddleware(InviteUserSchema),
  userController.inviteUserController
);

userRoutes.post(
  "/:userId/resend-invitation",
  validateTokenJwtMiddleware,
  validatePermissionUserAdminMiddleware,
  validateParamsMiddleware(UserIdSchema),
  userController.resendInvitationController
);

userRoutes.post(
  "/:userId/verify-invitation-token",
  validateParamsMiddleware(UserIdSchema),
  validateBodyMiddleware(VerifyInvitationToken),
  userController.verifyInvitationTokenController
);

userRoutes.post(
  "/register",
  validateBodyMiddleware(RegisterInvitedUserSchema),
  userController.registerInvitedUserController
);
