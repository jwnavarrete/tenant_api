import { User } from "@prisma/client";
import { prisma } from "@/server";
import { hash } from "bcryptjs";
import { AppError } from "@/errors";
import * as usersInterfaces from "@/interfaces/users.interfaces";
import { UserReturnCreatedSchema } from "@/schemas/users.schemas";

export const createUsersService = async (
  payload: usersInterfaces.iUserCreate
): Promise<usersInterfaces.iUserReturnCreated> => {
  // const findEmailUser: User | null = await prisma.user.findUnique({
  //   where: {
  //     email: payload.email,
  //   },
  // });

  // if (findEmailUser) {
  //   throw new AppError("Email already exists", 409);
  // }

  // payload.password = await hash(payload.password, 10);
  // const user: User = await prisma.user.create({
  //   data: {
  //     ...payload,
  //     tenant: payload.tenant,
  //   },
  // });
  // const responseUser: usersInterfaces.iUserReturnCreated =
  //   UserReturnCreatedSchema.parse(user);
  // return responseUser;
  return {} as usersInterfaces.iUserReturnCreated;
};
