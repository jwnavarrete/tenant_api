import { News } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { AppError } from "@/errors";
import { IuserTokenInfos } from "@/interfaces/users.interfaces";
import { prisma } from "@/server";

export const validateNewsOwnerdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let newsIdParams: string = req.params.id;
  // const userInfosToken: IuserTokenInfos = req.userTokenInfos;

  if (req.route.path === "/:tagId/news/:newsId/") {
    newsIdParams = req.params.newsId;
  }

  if (isNaN(Number(newsIdParams))) {
    throw new AppError("News not found", 404);
  }

  const findNews: News | null = await prisma.news.findUnique({
    where: {
      id: Number(newsIdParams),
    },
  });

  if (!findNews) {
    throw new AppError("News not found", 404);
  }

  if (findNews.published === false) {
    throw new AppError("News not found", 404);
  }

  // if (
  //   findNews.authorId !== String(userInfosToken.id) &&
  //   !userInfosToken.admin
  // ) {
  //   throw new AppError("Insufficient permission", 403);
  // }

  next();
};
