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
exports.validateCommentOwnerdMiddleware = void 0;
const errors_1 = require("@/errors");
const server_1 = require("@/server");
const validateCommentOwnerdMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const commentIdParams = req.params.id;
    // const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    if (isNaN(Number(commentIdParams))) {
        throw new errors_1.AppError("Comment not found", 404);
    }
    const findComment = yield server_1.prisma.newsComments.findUnique({
        where: {
            id: Number(commentIdParams),
        },
    });
    if (!findComment) {
        throw new errors_1.AppError("Comment not found", 404);
    }
    // if (
    //   findComment.userId !== String(userInfosToken.id) &&
    //   !userInfosToken.admin
    // ) {
    //   throw new AppError("Insufficient permission", 403);
    // }
    next();
});
exports.validateCommentOwnerdMiddleware = validateCommentOwnerdMiddleware;
