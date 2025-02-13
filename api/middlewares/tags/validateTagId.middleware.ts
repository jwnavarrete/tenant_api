import { Tag } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { AppError } from "@/errors";
import { prisma } from "@/index";

export const validateTagIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let tagIdParams: string = req.params.id;

  if (req.route.path === "/:tagId/news/:newsId/") {
    tagIdParams = req.params.tagId;
  }

  if (isNaN(Number(tagIdParams))) {
    throw new AppError("Tag not found", 404);
  }

  const findTag: Tag | null = await prisma.tag.findUnique({
    where: {
      id: Number(tagIdParams),
    },
  });

  if (!findTag) {
    throw new AppError("Tag not found", 404);
  }

  next();
};
