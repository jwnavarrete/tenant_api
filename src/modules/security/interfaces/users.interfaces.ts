import { z } from "zod";
import * as usersSchemas from "../schemas/users.schemas";

export type iUserCreate = z.infer<typeof usersSchemas.UserCreateSchema>;
export type iUserReturnCreated = z.infer<
  typeof usersSchemas.UserReturnCreatedSchema
>;
export type iUserUpdate = z.infer<typeof usersSchemas.UserUpdateSchema>;
export type iUserReturnUpdated = z.infer<
  typeof usersSchemas.UserReturnUpdatedSchema
>;
export type iUserReturnList = z.infer<typeof usersSchemas.UserReturnListSchema>;

export type iUserLogin = z.infer<typeof usersSchemas.UserLoginSchema>;

export interface IuserTokenInfos {
  email: string;
  id: string;
  admin: boolean;
}

export interface iUserTokensResponse {
  accessToken: string;
  refreshToken: string;
}

export type iUserLoginrefresh = z.infer<
  typeof usersSchemas.UserLoginRefreshSchema
>;
