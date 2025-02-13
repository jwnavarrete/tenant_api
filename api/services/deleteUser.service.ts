import { prisma } from "@/index";
import { User } from "@prisma/client";

export const deleteUserService = async (
  userIdParams: string
): Promise<void> => {
  const softDeleteUser: User = await prisma.user.update({
    where: {
      id: String(userIdParams),
    },
    data: {
      isDeleted: true,
    },
  });
};
