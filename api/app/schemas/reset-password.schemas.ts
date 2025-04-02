import { z } from "zod";

const ResetPasswordTokenSchema = z.object({
  token: z.string(),
  userId: z.string(),
});

const ResetPasswordSchema = ResetPasswordTokenSchema.extend({
  password: z.string(),
});

const SendResetPasswordSchema = z.object({
  email: z.string().email(),
  slug: z.string(),
});

export {
  ResetPasswordTokenSchema,
  ResetPasswordSchema,
  SendResetPasswordSchema,
};
