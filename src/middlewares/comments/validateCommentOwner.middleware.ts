import { NewsComments } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { AppError } from "@/errors";
import { IuserTokenInfos } from "@/interfaces/users.interfaces";
import { prisma } from "@/server";

export const validateCommentOwnerdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const commentIdParams: string = req.params.id;
  // const userInfosToken: IuserTokenInfos = req.userTokenInfos;

  if (isNaN(Number(commentIdParams))) {
    throw new AppError("Comment not found", 404);
  }

  const findComment: NewsComments | null = await prisma.newsComments.findUnique(
    {
      where: {
        id: Number(commentIdParams),
      },
    }
  );

  if (!findComment) {
    throw new AppError("Comment not found", 404);
  }

  // if (
  //   findComment.userId !== String(userInfosToken.id) &&
  //   !userInfosToken.admin
  // ) {
  //   throw new AppError("Insufficient permission", 403);
  // }

  next();
};
