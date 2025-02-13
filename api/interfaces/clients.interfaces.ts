import { z } from "zod";
import * as clientSchemas from "@/schemas/clients.schemas";

// Tipos inferidos
export type iClientCreateBody = z.infer<typeof clientSchemas.ClientCreateSchema>;
export type iClientCreateReturn = z.infer<typeof clientSchemas.ClientReturnCreatedSchema>;
export type iClientUpdateReturn = z.infer<typeof clientSchemas.ClientReturnUpdatedSchema>;
export type iClientListReturn = z.infer<typeof clientSchemas.ClientReturnListSchema>;