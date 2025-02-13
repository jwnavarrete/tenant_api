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
exports.retrieveNewsByIdService = void 0;
const errors_1 = require("@/errors");
const news_schemas_1 = require("@/schemas/news.schemas");
const server_1 = require("@/server");
const retrieveNewsByIdService = (newsId) => __awaiter(void 0, void 0, void 0, function* () {
    if (isNaN(Number(newsId))) {
        throw new errors_1.AppError("News not found", 404);
    }
    const find_news = yield server_1.prisma.news.findUnique({
        where: {
            id: Number(newsId),
        },
        include: {
            author: true,
            tagsList: {
                include: {
                    tag: true,
                },
            },
            commentsList: {
                include: {
                    user: true,
                },
            },
        },
    });
    if (!find_news) {
        throw new errors_1.AppError("News not found", 404);
    }
    if (find_news.published === false) {
        throw new errors_1.AppError("News not found", 404);
    }
    const responseNewsSerializer = news_schemas_1.ReturnNewsCreatedSchema.parse(find_news);
    return responseNewsSerializer;
});
exports.retrieveNewsByIdService = retrieveNewsByIdService;
