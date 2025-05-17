import { z } from "zod";
import {
  paramCobroSchema,
  tenantConfigResponseSchema,
} from "../schemas/tenantConfig.schema";

export type IParamCobro = z.infer<typeof paramCobroSchema>;
export type ITenantConfigResponse = z.infer<typeof tenantConfigResponseSchema>;
