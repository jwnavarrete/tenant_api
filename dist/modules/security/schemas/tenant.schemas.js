"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySchema = exports.TenantSchema = exports.ClientSchema = void 0;
const zod_1 = require("zod");
const ClientSchema = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    kvk: zod_1.z.string(),
    contactEmail: zod_1.z.string().email(),
    numberOfEmployees: zod_1.z.string(),
    country: zod_1.z.string(),
    address: zod_1.z.string(),
});
exports.ClientSchema = ClientSchema;
const TenantSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    subdomain: zod_1.z.string(),
    client: ClientSchema,
});
exports.TenantSchema = TenantSchema;
const QuerySchema = zod_1.z.object({
    email: zod_1.z.string().email().optional(),
});
exports.QuerySchema = QuerySchema;
