import { iCommentsListReturn } from "@/interfaces/comments.interfaces";
import { listCommentsReturn } from "@/schemas/comments.schemas";
import { prisma } from "@/index";

export const listAllCommentsBynewsService = async (
  newsId: string
): Promise<iCommentsListReturn> => {
  const listComments = await prisma.newsComments.findMany({
    where: {
      newsId: Number(newsId),
    },
    include: {
      user: true,
    },
  });

  const response: iCommentsListReturn = listCommentsReturn.parse(listComments);
  return response;
};
