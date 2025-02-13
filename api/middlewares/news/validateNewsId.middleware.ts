import { News } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { AppError } from "@/errors";
import { prisma } from "@/index";

export const validateNewsIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const newsIdParams: string = req.params.id;
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

  next();
};
