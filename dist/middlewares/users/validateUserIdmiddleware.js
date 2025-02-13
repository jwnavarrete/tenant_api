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
exports.validateUserIdMiddleware = void 0;
const errors_1 = require("@/errors");
const server_1 = require("@/server");
const validateUserIdMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userIdParams = req.params.id;
    if (isNaN(Number(userIdParams))) {
        throw new errors_1.AppError("User not found", 404);
    }
    const findUser = yield server_1.prisma.user.findUnique({
        where: {
            id: String(userIdParams),
        },
    });
    if (!findUser) {
        throw new errors_1.AppError("User not found", 404);
    }
    if (findUser.isDeleted === true) {
        throw new errors_1.AppError("User not found", 404);
    }
    next();
});
exports.validateUserIdMiddleware = validateUserIdMiddleware;
