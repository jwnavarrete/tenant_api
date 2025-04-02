import { z } from "zod";
import { paramGeneralSchema } from "./parameter.schema";

const paramCobroSchema = z.object({
  porcInteresCobranza: z.number().min(0),
});

const tenantConfigResponseSchema = z.object({
  tenantId: z.string(),
  parameterId: z.string(),
  porcInteresCobranza: z.number().min(0),
  parameter: paramGeneralSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export { paramCobroSchema, tenantConfigResponseSchema };
