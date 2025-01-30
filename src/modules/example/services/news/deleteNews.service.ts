import { News } from "@prisma/client";
import { prisma } from "@/server";

export const deleteNewsService = async (
  newsIdParams: string
): Promise<void> => {
  const softDeleteNews: News = await prisma.news.update({
    where: {
      id: Number(newsIdParams),
    },
    data: { published: false },
  });
};
