import { Response } from "express";
import { User } from "@prisma/client";
import { prisma } from "@/server";
import { compare } from "bcryptjs";
import { AppError } from "@/errors";
import * as usersInterfaces from "@/interfaces/users.interfaces";
import { sign } from "jsonwebtoken";
import * as logics from "./logics";
import "dotenv/config";

const secretKey = String(process.env.SECRET_KEY);
  
export const loginUsersService = async (
  payload: usersInterfaces.iUserLogin,
  res: Response
): Promise<usersInterfaces.iUserTokensResponse> => {

  const findUserWithTenant = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    include: {
      tenant: true,
    },
  });

  if (!findUserWithTenant) {
    throw new AppError("Invalid credentials", 401);
  }

  const findUser = findUserWithTenant;

  logics.validateFindUser(findUser, "Invalid credentials", 401);

  const passwordMatch: boolean = await compare(
    payload.password,
    findUser!.password
  );

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const accessToken: string = sign(
    {
      email: findUser!.email,
      tenantId: findUser!.tenantId,
      subdomain: findUser!.tenant.subdomain,
      type: "access",
    },
    secretKey,
    {
      expiresIn: "1h",
      subject: String(findUser!.id),
    }
  );

  
  const refreshToken: string = sign(
    {
      email: findUser!.email,
      tenantId: findUser!.tenantId,
      subdomain: findUser!.tenant.subdomain,
      type: "refresh",
    },
    secretKey, // Ensure this is a string
    {
      expiresIn: "7d", // Ensure this is a string
      subject: String(findUser!.id), // Ensure this is a string
    }
  );

  return { accessToken, refreshToken };
};
