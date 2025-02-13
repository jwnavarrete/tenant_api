"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnListNewsSchema = exports.ReturnNewsCreatedSchema = exports.NewsUpdateSchema = exports.NewsCreateSchema = exports.NewsSchema = exports.typeOptions = void 0;
const zod_1 = require("zod");
const comments_schemas_1 = require("./comments.schemas");
exports.typeOptions = [
    "Outros",
    "Política",
    "Economia",
    "Cultura",
    "Segurança",
    "Saúde",
    "Educação",
    "Esportes",
    "Tecnologia",
];
exports.NewsSchema = zod_1.z.object({
    id: zod_1.z.number().positive().int(),
    title: zod_1.z.string().max(80),
    subTitle: zod_1.z.string().max(200),
    content: zod_1.z.string(),
    type: zod_1.z.enum(exports.typeOptions),
    published: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    authorId: zod_1.z.number(),
});
exports.NewsCreateSchema = exports.NewsSchema.omit({
    id: true,
    published: true,
    createdAt: true,
    updatedAt: true,
    authorId: true,
}).extend({
    tags: zod_1.z.array(zod_1.z.string().max(30)),
});
exports.NewsUpdateSchema = exports.NewsCreateSchema.partial();
const authorSchema = zod_1.z.object({
    id: zod_1.z.number().positive().int(),
    name: zod_1.z.string().max(80),
    email: zod_1.z.string().email().max(80),
});
const tags = zod_1.z.object({
    id: zod_1.z.number().positive().int(),
    tag: zod_1.z.object({
        id: zod_1.z.number().positive().int(),
        name: zod_1.z.string().max(30),
    }),
});
exports.ReturnNewsCreatedSchema = exports.NewsSchema.extend({
    author: authorSchema,
    tagsList: tags.array(),
    commentsList: comments_schemas_1.listCommentsReturn,
}).omit({
    authorId: true,
});
exports.ReturnListNewsSchema = exports.ReturnNewsCreatedSchema.array();
