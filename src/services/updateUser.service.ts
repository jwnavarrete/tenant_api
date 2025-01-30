import { prisma } from "@/server";
import { User } from "@prisma/client";
import { iUserReturnUpdated } from "@/interfaces/users.interfaces";
import { UserReturnCreatedSchema } from "@/schemas/users.schemas";
import { hash } from "bcryptjs";

export const updateUserService = async (
  userIdParams: string,
  payload: any
): Promise<iUserReturnUpdated> => {
  if (payload.password) {
    payload.password = await hash(payload.password, 10);
  }
  const updateUser: User = await prisma.user.update({
    where: {
      id: String(userIdParams),
    },
    data: {
      ...payload,
    },
  });

  const responseUserSerializer = UserReturnCreatedSchema.parse(updateUser);
  return responseUserSerializer;
};
