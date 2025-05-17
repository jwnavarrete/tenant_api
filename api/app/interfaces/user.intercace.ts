import { z } from "zod";
import {
  UserSchema,
  UserResponseSchema,
  InviteUserSchema,
  UpdateUserSchema,
} from "../schemas/user.schemas";

// Tipos inferidos
export type IUser = z.infer<typeof UserSchema>;
export type IUserResponse = z.infer<typeof UserResponseSchema>;
export type IInviteUser = z.infer<typeof InviteUserSchema>;
export type IUserUpdate = z.infer<typeof UpdateUserSchema>;
