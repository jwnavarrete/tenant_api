import { z } from "zod";

export const CommentsCreateSchema = z.object({
  message: z.string().max(200),
});

const userSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(80),
  email: z.string().email().max(80),
});

export const CommentsCreateReturnSchema = z.object({
  id: z.number().positive().int(),
  message: z.string().max(200),
  createdAt: z.date(),
  newsId: z.number().positive().int(),
  user: userSchema,
});

export const listCommentsReturn = CommentsCreateReturnSchema.array();
