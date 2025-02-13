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
exports.addTagsInNewsService = void 0;
const errors_1 = require("@/errors");
const news_schemas_1 = require("@/schemas/news.schemas");
const server_1 = require("@/server");
const addTagsInNewsService = (payload, newsId) => __awaiter(void 0, void 0, void 0, function* () {
    const tagsPayload = payload.tags.map((name) => name.toUpperCase());
    const findRelationsNewsTags = yield server_1.prisma.tagsNews.findMany({
        where: {
            newsId: Number(newsId),
        },
        include: {
            tag: true,
        },
    });
    const findTagsExistsInNews = findRelationsNewsTags.map((item) => item.tag.name);
    const tagsToAdd = tagsPayload.filter((tagName) => !findTagsExistsInNews.includes(tagName));
    if (tagsToAdd.length === 0) {
        throw new errors_1.AppError(`The tags /${payload.tags}/ sent already exist`, 400);
    }
    const createdRelationsNewsTags = tagsToAdd.map((name) => __awaiter(void 0, void 0, void 0, function* () {
        return yield server_1.prisma.tagsNews.create({
            data: {
                news: {
                    connect: {
                        id: Number(newsId),
                    },
                },
                tag: {
                    connectOrCreate: {
                        where: {
                            name,
                        },
                        create: {
                            name,
                        },
                    },
                },
            },
        });
    }));
    yield Promise.all(createdRelationsNewsTags);
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
    const responseNewsCreatedSerializer = news_schemas_1.ReturnNewsCreatedSchema.parse(find_news);
    return responseNewsCreatedSerializer;
});
exports.addTagsInNewsService = addTagsInNewsService;
