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
exports.commentsRoutes = void 0;
const express_1 = require("express");
const commentsContoller = __importStar(require("@/controllers/comments.contoller"));
const validateCommentOwner_middleware_1 = require("@/middlewares/comments/validateCommentOwner.middleware");
const validateBody_middleware_1 = require("@/middlewares/global/validateBody.middleware");
const validateTokenJwt_middlewares_1 = require("@/middlewares/global/validateTokenJwt.middlewares");
const validateNewsId_middleware_1 = require("@/middlewares/news/validateNewsId.middleware");
const comments_schemas_1 = require("@/schemas/comments.schemas");
exports.commentsRoutes = (0, express_1.Router)();
exports.commentsRoutes.post("/news/:id/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validateNewsId_middleware_1.validateNewsIdMiddleware, (0, validateBody_middleware_1.validateBodyMiddleware)(comments_schemas_1.CommentsCreateSchema), commentsContoller.createCommentsController);
exports.commentsRoutes.get("/news/:id/", validateNewsId_middleware_1.validateNewsIdMiddleware, commentsContoller.listAllCommentsByNewsController);
exports.commentsRoutes.get("", commentsContoller.listAllCommentsController);
exports.commentsRoutes.delete("/:id/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validateCommentOwner_middleware_1.validateCommentOwnerdMiddleware, commentsContoller.deleteCommentsByIdController);
exports.commentsRoutes.patch("/:id/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validateCommentOwner_middleware_1.validateCommentOwnerdMiddleware, (0, validateBody_middleware_1.validateBodyMiddleware)(comments_schemas_1.CommentsCreateSchema), commentsContoller.updateCommentsController);
