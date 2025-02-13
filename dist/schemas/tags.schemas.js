"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTagsSchema = exports.CreateTagsSchema = void 0;
const zod_1 = require("zod");
exports.CreateTagsSchema = zod_1.z.object({
    tags: zod_1.z.array(zod_1.z.string().max(30)),
});
exports.DeleteTagsSchema = zod_1.z.object({
    ids: zod_1.z.array(zod_1.z.number().int().positive()),
});
