import { z } from "zod";

// Esquema para el Tenant
export const TenantSchema = z.object({
  subdomain: z.string().max(100), // Subdominio único para el tenant
});

// Esquema para el User
export const UserSchema = z.object({
  email: z.string().email().max(100), // Correo electrónico del usuario
  name: z.string().max(100), // Nombre del usuario
  password: z.string().max(120), // Contraseña del usuario
});

// Esquema para el Client
export const ClientSchema = z.object({
  name: z.string().regex(/^[a-zA-Z0-9\s]+$/).max(100), // Nombre de la empresa (solo letras y números)
  contactEmail: z.string().email().max(100), // Email de contacto de la empresa
  phone: z.string().regex(/^[0-9]+$/).max(15), // Teléfono de la empresa (solo números)
  address: z.string().regex(/^[a-zA-Z0-9\s]+$/).max(200), // Dirección de la empresa (solo letras y números)
  // tenant: TenantSchema, // Tenant asociado al Client
  user: UserSchema, // Usuario asociado al Tenant
});

// Esquema para la creación del Client (omite campos autogenerados)
export const ClientCreateSchema = ClientSchema.omit({
  // No necesitamos omitir nada aquí, ya que todos los campos son proporcionados por el usuario
});

// Esquema para la respuesta después de crear el Client
export const ClientReturnCreatedSchema = z.object({
  id: z.string().uuid(), // ID autogenerado
  name: z.string().max(100),
  contactEmail: z.string().email().max(100),
  phone: z.string().max(15),
  address: z.string().max(200),
  tenant: z.object({
    id: z.string().uuid(), // ID autogenerado del Tenant
    subdomain: z.string().max(100),
    clientId: z.string().uuid(), // ID del Client asociado
    createdAt: z.date(), // Fecha de creación
    updatedAt: z.date(), // Fecha de última actualización
  }),
  user: z.object({
    id: z.string().uuid(), // ID autogenerado del User
    email: z.string().email().max(100),
    name: z.string().max(100),
    tenantId: z.string().uuid(), // ID del Tenant asociado
    createdAt: z.date(), // Fecha de creación
    updatedAt: z.date(), // Fecha de última actualización
  }),
  createdAt: z.date(), // Fecha de creación del Client
  updatedAt: z.date(), // Fecha de última actualización del Client
});

// Esquema para la respuesta después de actualizar el Client
export const ClientReturnUpdatedSchema = ClientReturnCreatedSchema;

// Esquema para la lista de Clients
export const ClientReturnListSchema = ClientReturnCreatedSchema.array();