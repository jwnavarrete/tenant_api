import { prisma } from "@/server";
import { UserReturnListSchema } from "@/schemas/users.schemas";
import { iUserReturnList } from "@/interfaces/users.interfaces";
import { User } from "@prisma/client";

export const retrieveUsersService = async (): Promise<iUserReturnList> => {
  const findUsers: User[] = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
    where: {
      isDeleted: false,
    },
  });

  const responseListUsersSerializer: iUserReturnList =
    UserReturnListSchema.parse(findUsers);

  return responseListUsersSerializer;
};
