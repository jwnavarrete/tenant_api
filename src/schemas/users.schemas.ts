import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(80),
  email: z.string().email().max(80),
  password: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    )
    .min(8)
    .max(32),
  isAdmin: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  isDeleted: z.boolean(),
});

export const UserCreateSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  isDeleted: true,
});

export const UserUpdateSchema = UserSchema.omit({
  id: true,
  email: true,
  isAdmin: true,
  createdAt: true,
  updatedAt: true,
  isDeleted: true,
}).partial();
// export const UserUpdateSchema = z.object({
//   name: z.string().max(80).optional(),
//   password: z.string().max(120).optional(),
// });

export const UserReturnCreatedSchema = UserSchema.omit({
  password: true,
  isDeleted: true,
});

export const UserReturnUpdatedSchema = UserReturnCreatedSchema;

export const UserReturnListSchema = UserReturnCreatedSchema.array();

export const UserLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const UserLoginRefreshSchema = z.object({
  token: z.string(),
});
