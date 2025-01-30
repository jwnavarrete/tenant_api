import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { AppError } from "@/errors";
import { prisma } from "@/server";

export const validateUserIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userIdParams: string = req.params.id;
  if (isNaN(Number(userIdParams))) {
    throw new AppError("User not found", 404);
  }

  const findUser: User | null = await prisma.user.findUnique({
    where: {
      id: Number(userIdParams),
    },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (findUser.isDeleted === true) {
    throw new AppError("User not found", 404);
  }

  next();
};
