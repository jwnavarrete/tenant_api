import { prisma } from "@/server";
import { User } from "@prisma/client";

export const deleteUserService = async (
  userIdParams: string
): Promise<void> => {
  const softDeleteUser: User = await prisma.user.update({
    where: {
      id: Number(userIdParams),
    },
    data: {
      isDeleted: true,
    },
  });
};
