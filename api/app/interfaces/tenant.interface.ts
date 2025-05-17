import { z } from "zod";

import {
  ClientSchema,
  QuerySchema,
  TenantSchema,
} from "../schemas/tenant.schemas";

export type iClient = z.infer<typeof ClientSchema>;
export type iTenant = z.infer<typeof TenantSchema>;
export type iQuery = z.infer<typeof QuerySchema>;
