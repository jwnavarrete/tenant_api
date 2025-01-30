import { prisma } from "@/server";
import { User } from "@prisma/client";
import { AppError } from "@/errors";
import { UserReturnCreatedSchema } from "@/schemas/users.schemas";
import * as logics from "./logics";

export const retrieveProfileUserService = async (
  userIdParams: string
): Promise<any> => {
  if (isNaN(Number(userIdParams))) {
    throw new AppError("User not found", 404);
  }

  const findUser: User | null = await prisma.user.findUnique({
    where: {
      id: String(userIdParams),
    },
  });

  logics.validateFindUser(findUser, "User not found", 404);

  const responseUserProfileSerializer = UserReturnCreatedSchema.parse(findUser);

  return responseUserProfileSerializer;
};
