import { z } from "zod";

export const CreateTagsSchema = z.object({
  tags: z.array(z.string().max(30)),
});

export const DeleteTagsSchema = z.object({
  ids: z.array(z.number().int().positive()),
});
