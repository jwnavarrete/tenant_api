import { iReturnListNews } from "@/interfaces/news.interfaces";
import { ReturnListNewsSchema } from "@/schemas/news.schemas";
import { prisma } from "@/index";

export const retrieveNewsByUserIdService = async (
  userId: string
): Promise<iReturnListNews> => {
  const find_news = await prisma.news.findMany({
    where: {
      authorId: String(userId),
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

  const responseNewsSerializer: iReturnListNews =
    ReturnListNewsSchema.parse(find_news);
  return responseNewsSerializer;
};
