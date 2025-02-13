"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const userController = __importStar(require("@/controllers/users.controller"));
const validateBody_middleware_1 = require("@/middlewares/global/validateBody.middleware");
const validatePermissionUserId_middlewares_1 = require("@/middlewares/users/validatePermissionUserId.middlewares");
const validateTokenJwt_middlewares_1 = require("@/middlewares/global/validateTokenJwt.middlewares");
const userSchemas = __importStar(require("@/schemas/users.schemas"));
const validateUserAdmin_middleware_1 = require("@/middlewares/global/validateUserAdmin.middleware");
const validateUserIdmiddleware_1 = require("@/middlewares/users/validateUserIdmiddleware");
exports.usersRoutes = (0, express_1.Router)();
exports.usersRoutes.post("", (0, validateBody_middleware_1.validateBodyMiddleware)(userSchemas.UserCreateSchema), userController.createUsersController);
exports.usersRoutes.post("/login/", (0, validateBody_middleware_1.validateBodyMiddleware)(userSchemas.UserLoginSchema), userController.loginUsersController);
exports.usersRoutes.post("/login/refresh-token/", (0, validateBody_middleware_1.validateBodyMiddleware)(userSchemas.UserLoginRefreshSchema), userController.loginRefreshUsersController);
exports.usersRoutes.get("/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validateUserAdmin_middleware_1.validatePermissionUserAdminMiddleware, userController.retrieveUsersController);
exports.usersRoutes.get("/profile/:id/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validatePermissionUserId_middlewares_1.validatePermissionUserIdMiddleware, validateUserIdmiddleware_1.validateUserIdMiddleware, userController.retrieveProfileUserContoller);
exports.usersRoutes.delete("/:id/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validatePermissionUserId_middlewares_1.validatePermissionUserIdMiddleware, validateUserIdmiddleware_1.validateUserIdMiddleware, userController.deleteUserController);
exports.usersRoutes.patch("/:id/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validatePermissionUserId_middlewares_1.validatePermissionUserIdMiddleware, validateUserIdmiddleware_1.validateUserIdMiddleware, (0, validateBody_middleware_1.validateBodyMiddleware)(userSchemas.UserUpdateSchema), userController.updateUserController);
