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
exports.removeTagsInNewsService = void 0;
const errors_1 = require("@/errors");
const server_1 = require("@/server");
const removeTagsInNewsService = (tagId, newsId) => __awaiter(void 0, void 0, void 0, function* () {
    const findRelationsNewsTags = yield server_1.prisma.tagsNews.findMany({
        where: {
            newsId: Number(newsId),
        },
        include: {
            tag: true,
        },
    });
    const filterTagsExistsInNews = findRelationsNewsTags.find((item) => item.newsId === Number(newsId) && item.tagId === Number(tagId));
    if (!filterTagsExistsInNews) {
        throw new errors_1.AppError("Tag not found in News", 404);
    }
    yield server_1.prisma.tagsNews.delete({
        where: {
            id: filterTagsExistsInNews.id,
        },
    });
});
exports.removeTagsInNewsService = removeTagsInNewsService;
