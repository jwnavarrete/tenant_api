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
exports.validateTagIdMiddleware = void 0;
const errors_1 = require("@/errors");
const server_1 = require("@/server");
const validateTagIdMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let tagIdParams = req.params.id;
    if (req.route.path === "/:tagId/news/:newsId/") {
        tagIdParams = req.params.tagId;
    }
    if (isNaN(Number(tagIdParams))) {
        throw new errors_1.AppError("Tag not found", 404);
    }
    const findTag = yield server_1.prisma.tag.findUnique({
        where: {
            id: Number(tagIdParams),
        },
    });
    if (!findTag) {
        throw new errors_1.AppError("Tag not found", 404);
    }
    next();
});
exports.validateTagIdMiddleware = validateTagIdMiddleware;
