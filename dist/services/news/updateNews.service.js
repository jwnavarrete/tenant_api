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
exports.updateNewsService = void 0;
const server_1 = require("@/server");
const news_schemas_1 = require("@/schemas/news.schemas");
const updateNewsService = (newsIdParams, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedNews = yield server_1.prisma.news.update({
        where: {
            id: Number(newsIdParams),
        },
        data: Object.assign({}, payload),
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
    const responseNewsSerializer = news_schemas_1.ReturnNewsCreatedSchema.parse(updatedNews);
    return responseNewsSerializer;
});
exports.updateNewsService = updateNewsService;
