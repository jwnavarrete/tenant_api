"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNewsOwnerdMiddleware = void 0;
const errors_1 = require("@/errors");
const server_1 = require("@/server");
const validateNewsOwnerdMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newsIdParams = req.params.id;
    // const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    if (req.route.path === "/:tagId/news/:newsId/") {
        newsIdParams = req.params.newsId;
    }
    if (isNaN(Number(newsIdParams))) {
        throw new errors_1.AppError("News not found", 404);
    }
    const findNews = yield server_1.prisma.news.findUnique({
        where: {
            id: Number(newsIdParams),
        },
    });
    if (!findNews) {
        throw new errors_1.AppError("News not found", 404);
    }
    if (findNews.published === false) {
        throw new errors_1.AppError("News not found", 404);
    }
    // if (
    //   findNews.authorId !== String(userInfosToken.id) &&
    //   !userInfosToken.admin
    // ) {
    //   throw new AppError("Insufficient permission", 403);
    // }
    next();
});
exports.validateNewsOwnerdMiddleware = validateNewsOwnerdMiddleware;
