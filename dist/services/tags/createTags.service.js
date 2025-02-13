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
exports.createTagsService = void 0;
const errors_1 = require("@/errors");
const server_1 = require("@/server");
const createTagsService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const tagsToCreate = payload.tags.map((name) => name.toUpperCase());
    const data = tagsToCreate.map((name) => {
        return { name };
    });
    const createManyTags = yield server_1.prisma.tag.createMany({
        data,
        skipDuplicates: true,
    });
    if (createManyTags.count === 0) {
        throw new errors_1.AppError(`The tags /${payload.tags}/ sent already exist`, 400);
    }
    const response = yield server_1.prisma.tag.findMany({
        where: {
            name: { in: tagsToCreate },
        },
    });
    return response;
});
exports.createTagsService = createTagsService;
