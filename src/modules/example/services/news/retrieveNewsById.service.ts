import { AppError } from "@/errors";
import { iReturnNewsCreated } from "@/modules/example/interfaces/news.interfaces";
import { ReturnNewsCreatedSchema } from "@/modules/example/schemas/news.schemas";
import { prisma } from "@/server";

export const retrieveNewsByIdService = async (
  newsId: string
): Promise<iReturnNewsCreated> => {
  if (isNaN(Number(newsId))) {
    throw new AppError("News not found", 404);
  }

  const find_news = await prisma.news.findUnique({
    where: {
      id: Number(newsId),
    },
    include: {
      author: true,
      tagsList: {
        include: {
          tag: true,
        },
      },
      commentsList: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!find_news) {
    throw new AppError("News not found", 404);
  }

  if (find_news.published === false) {
    throw new AppError("News not found", 404);
  }

  const responseNewsSerializer: iReturnNewsCreated =
    ReturnNewsCreatedSchema.parse(find_news);
  return responseNewsSerializer;
};
