"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFindUser = void 0;
const errors_1 = require("@/errors");
const validateFindUser = (findUser, message, statusCode) => {
    if (!findUser) {
        throw new errors_1.AppError(message, statusCode);
    }
    if (findUser.isDeleted) {
        throw new errors_1.AppError(message, statusCode);
    }
};
exports.validateFindUser = validateFindUser;
