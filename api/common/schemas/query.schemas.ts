import { z } from "zod";

const QueryParamsSchema = z.object({
  page: z.number().min(1).optional(),
  limit: z.number().min(1).optional(),
  search: z.string().optional(),
});

export { QueryParamsSchema };
