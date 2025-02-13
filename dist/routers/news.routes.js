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
exports.newsRoutes = void 0;
const express_1 = require("express");
const newsController = __importStar(require("@/controllers/news.controller"));
const validateBody_middleware_1 = require("@/middlewares/global/validateBody.middleware");
const validateTokenJwt_middlewares_1 = require("@/middlewares/global/validateTokenJwt.middlewares");
const validateNewsOwner_middleware_1 = require("@/middlewares/news/validateNewsOwner.middleware");
const news_schemas_1 = require("@/schemas/news.schemas");
exports.newsRoutes = (0, express_1.Router)();
exports.newsRoutes.post("", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, (0, validateBody_middleware_1.validateBodyMiddleware)(news_schemas_1.NewsCreateSchema), newsController.createNewsController);
exports.newsRoutes.get("", newsController.retrieveNewsController);
exports.newsRoutes.get("/users/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, newsController.retrieveNewsByUserIdController);
exports.newsRoutes.get("/:id/", newsController.retrieveNewsByIdController);
exports.newsRoutes.delete("/:id/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validateNewsOwner_middleware_1.validateNewsOwnerdMiddleware, newsController.deleteNewsController);
exports.newsRoutes.patch("/:id/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, validateNewsOwner_middleware_1.validateNewsOwnerdMiddleware, (0, validateBody_middleware_1.validateBodyMiddleware)(news_schemas_1.NewsUpdateSchema), newsController.updateNewsController);
