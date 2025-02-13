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
exports.tagsRoutes = void 0;
const express_1 = require("express");
const tagsController = __importStar(require("@/controllers/tags.controller"));
const validateBody_middleware_1 = require("@/middlewares/global/validateBody.middleware");
const validateTokenJwt_middlewares_1 = require("@/middlewares/global/validateTokenJwt.middlewares");
const validateUserAdmin_middleware_1 = require("@/middlewares/global/validateUserAdmin.middleware");
const validateNewsOwner_middleware_1 = require("@/middlewares/news/validateNewsOwner.middleware");
const validateTagId_middleware_1 = require("@/middlewares/tags/validateTagId.middleware");
const tags_schemas_1 = require("@/schemas/tags.schemas");
exports.tagsRoutes = (0, express_1.Router)();
exports.tagsRoutes.post("", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, (0, validateBody_middleware_1.validateBodyMiddleware)(tags_schemas_1.CreateTagsSchema), tagsController.createTagsController);
exports.tagsRoutes.get("", tagsController.retrieveTagsController);
exports.tagsRoutes.delete("/:id/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validateUserAdmin_middleware_1.validatePermissionUserAdminMiddleware, validateTagId_middleware_1.validateTagIdMiddleware, tagsController.deleteTagsController);
exports.tagsRoutes.post("/news/:id/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validateNewsOwner_middleware_1.validateNewsOwnerdMiddleware, (0, validateBody_middleware_1.validateBodyMiddleware)(tags_schemas_1.CreateTagsSchema), tagsController.addTagsInNewsController);
exports.tagsRoutes.delete("/:tagId/news/:newsId/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validateNewsOwner_middleware_1.validateNewsOwnerdMiddleware, validateTagId_middleware_1.validateTagIdMiddleware, tagsController.removeTagsInNewsController);
