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
exports.listAllCommentsBynewsService = void 0;
const comments_schemas_1 = require("@/schemas/comments.schemas");
const server_1 = require("@/server");
const listAllCommentsBynewsService = (newsId) => __awaiter(void 0, void 0, void 0, function* () {
    const listComments = yield server_1.prisma.newsComments.findMany({
        where: {
            newsId: Number(newsId),
        },
        include: {
            user: true,
        },
    });
    const response = comments_schemas_1.listCommentsReturn.parse(listComments);
    return response;
});
exports.listAllCommentsBynewsService = listAllCommentsBynewsService;
