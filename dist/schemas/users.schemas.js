"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginRefreshSchema = exports.UserLoginSchema = exports.UserReturnListSchema = exports.UserReturnUpdatedSchema = exports.UserReturnCreatedSchema = exports.UserUpdateSchema = exports.UserCreateSchema = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.number().positive().int(),
    name: zod_1.z.string().max(80),
    email: zod_1.z.string().email().max(80),
    password: zod_1.z
        .string()
        .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
        .regex(new RegExp(".*[a-z].*"), "One lowercase character")
        .regex(new RegExp(".*\\d.*"), "One number")
        .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "One special character")
        .min(8)
        .max(32),
    isAdmin: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
});
exports.UserCreateSchema = exports.UserSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    isDeleted: true,
});
exports.UserUpdateSchema = exports.UserSchema.omit({
    id: true,
    email: true,
    isAdmin: true,
    createdAt: true,
    updatedAt: true,
    isDeleted: true,
}).partial();
// export const UserUpdateSchema = z.object({
//   name: z.string().max(80).optional(),
//   password: z.string().max(120).optional(),
// });
exports.UserReturnCreatedSchema = exports.UserSchema.omit({
    password: true,
    isDeleted: true,
});
exports.UserReturnUpdatedSchema = exports.UserReturnCreatedSchema;
exports.UserReturnListSchema = exports.UserReturnCreatedSchema.array();
exports.UserLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
exports.UserLoginRefreshSchema = zod_1.z.object({
    token: zod_1.z.string(),
});
