"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientReturnListSchema = exports.ClientReturnUpdatedSchema = exports.ClientReturnCreatedSchema = exports.ClientCreateSchema = exports.ClientSchema = exports.UserSchema = exports.TenantSchema = void 0;
const zod_1 = require("zod");
// Esquema para el Tenant
exports.TenantSchema = zod_1.z.object({
    subdomain: zod_1.z.string().max(100), // Subdominio único para el tenant
});
// Esquema para el User
exports.UserSchema = zod_1.z.object({
    email: zod_1.z.string().email().max(100), // Correo electrónico del usuario
    name: zod_1.z.string().max(100), // Nombre del usuario
    password: zod_1.z.string().max(120), // Contraseña del usuario
});
// Esquema para el Client
exports.ClientSchema = zod_1.z.object({
    name: zod_1.z.string().regex(/^[a-zA-Z0-9\s]+$/).max(100), // Nombre de la empresa (solo letras y números)
    contactEmail: zod_1.z.string().email().max(100), // Email de contacto de la empresa
    phone: zod_1.z.string().regex(/^[0-9]+$/).max(15), // Teléfono de la empresa (solo números)
    address: zod_1.z.string().regex(/^[a-zA-Z0-9\s]+$/).max(200), // Dirección de la empresa (solo letras y números)
    // tenant: TenantSchema, // Tenant asociado al Client
    user: exports.UserSchema, // Usuario asociado al Tenant
});
// Esquema para la creación del Client (omite campos autogenerados)
exports.ClientCreateSchema = exports.ClientSchema.omit({
// No necesitamos omitir nada aquí, ya que todos los campos son proporcionados por el usuario
});
// Esquema para la respuesta después de crear el Client
exports.ClientReturnCreatedSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(), // ID autogenerado
    name: zod_1.z.string().max(100),
    contactEmail: zod_1.z.string().email().max(100),
    phone: zod_1.z.string().max(15),
    address: zod_1.z.string().max(200),
    tenant: zod_1.z.object({
        id: zod_1.z.string().uuid(), // ID autogenerado del Tenant
        subdomain: zod_1.z.string().max(100),
        clientId: zod_1.z.string().uuid(), // ID del Client asociado
        createdAt: zod_1.z.date(), // Fecha de creación
        updatedAt: zod_1.z.date(), // Fecha de última actualización
    }),
    user: zod_1.z.object({
        id: zod_1.z.string().uuid(), // ID autogenerado del User
        email: zod_1.z.string().email().max(100),
        name: zod_1.z.string().max(100),
        tenantId: zod_1.z.string().uuid(), // ID del Tenant asociado
        createdAt: zod_1.z.date(), // Fecha de creación
        updatedAt: zod_1.z.date(), // Fecha de última actualización
    }),
    createdAt: zod_1.z.date(), // Fecha de creación del Client
    updatedAt: zod_1.z.date(), // Fecha de última actualización del Client
    accessToken: zod_1.z.string(), // Token de acceso
    refreshToken: zod_1.z.string(), // Token de refresco
});
// Esquema para la respuesta después de actualizar el Client
exports.ClientReturnUpdatedSchema = exports.ClientReturnCreatedSchema;
// Esquema para la lista de Clients
exports.ClientReturnListSchema = exports.ClientReturnCreatedSchema.array();
