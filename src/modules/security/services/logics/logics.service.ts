import { User } from "@prisma/client";
import { AppError } from "@/errors";

export const validateFindUser = (
  findUser: User | null,
  message: string,
  statusCode: number
) => {
  if (!findUser) {
    throw new AppError(message, statusCode);
  }

  if (findUser.isDeleted) {
    throw new AppError(message, statusCode);
  }
};
