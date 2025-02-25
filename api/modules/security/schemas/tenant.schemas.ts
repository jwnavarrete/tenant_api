import { z } from 'zod';

const ClientSchema = z.object({
    name: z.string(),
    type: z.string(),
    kvk: z.string(),
    contactEmail: z.string().email(),
    numberOfEmployees: z.string(),
    country: z.string(),
    address: z.string(),
});

const TenantSchema = z.object({
    id: z.string().uuid(),
    subdomain: z.string(),
    client: ClientSchema.optional(),
});

const QuerySchema = z.object({
    email: z.string().email().optional(),
});

export { ClientSchema, TenantSchema, QuerySchema };
