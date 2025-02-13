"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCommentsReturn = exports.CommentsCreateReturnSchema = exports.CommentsCreateSchema = void 0;
const zod_1 = require("zod");
exports.CommentsCreateSchema = zod_1.z.object({
    message: zod_1.z.string().max(200),
});
const userSchema = zod_1.z.object({
    id: zod_1.z.number().positive().int(),
    name: zod_1.z.string().max(80),
    email: zod_1.z.string().email().max(80),
});
exports.CommentsCreateReturnSchema = zod_1.z.object({
    id: zod_1.z.number().positive().int(),
    message: zod_1.z.string().max(200),
    createdAt: zod_1.z.date(),
    newsId: zod_1.z.number().positive().int(),
    user: userSchema,
});
exports.listCommentsReturn = exports.CommentsCreateReturnSchema.array();
