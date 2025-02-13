import { Response } from "express";
import { prisma } from "@/index";
import { compare } from "bcryptjs";
import { AppError } from "@/errors";
import * as usersInterfaces from "@/interfaces/users.interfaces";
import {
  generateAccessToken,
  generateRefreshToken,
} from "@/common/lib/sessions";
import { IUserToken } from "@/interfaces/users.interfaces";

import * as logics from "./logics";
import "dotenv/config";

export const loginUsersService = async (
  payload: usersInterfaces.iUserLogin,
  res: Response
): Promise<usersInterfaces.iUserTokensResponse> => {
  // const findUserWithTenant = await prisma.user.findUnique({
  //   where: {
  //     tenantId: '3123123',
  //     email: payload.email,
  //   },
  //   include: {
  //     tenant: true,
  //   },
  // });

  // if (!findUserWithTenant) {
  //   throw new AppError("Invalid credentials", 401);
  // }

  // const findUser = findUserWithTenant;

  // logics.validateFindUser(findUser, "Invalid credentials", 401);

  // const passwordMatch: boolean = await compare(
  //   payload.password,
  //   findUser!.password
  // );

  // if (!passwordMatch) {
  //   throw new AppError("Invalid credentials", 401);
  // }

  // const paramToken: IUserToken = {
  //   id: findUser!.id,
  //   email: findUser!.email,
  //   tenantId: findUser!.tenantId,
  //   subdomain: findUser!.tenant.subdomain,
  // };

  // const accessToken = generateAccessToken(paramToken);

  // const refreshToken = generateRefreshToken(paramToken);

  // return { accessToken, refreshToken };
  return {} as usersInterfaces.iUserTokensResponse;
};
