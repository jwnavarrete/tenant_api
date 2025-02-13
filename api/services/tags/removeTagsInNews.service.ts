import { AppError } from "@/errors";
import { prisma } from "@/index";

export const removeTagsInNewsService = async (
  tagId: string,
  newsId: string
): Promise<void> => {
  const findRelationsNewsTags = await prisma.tagsNews.findMany({
    where: {
      newsId: Number(newsId),
    },
    include: {
      tag: true,
    },
  });

  const filterTagsExistsInNews = findRelationsNewsTags.find(
    (item) => item.newsId === Number(newsId) && item.tagId === Number(tagId)
  );

  if (!filterTagsExistsInNews) {
    throw new AppError("Tag not found in News", 404);
  }

  await prisma.tagsNews.delete({
    where: {
      id: filterTagsExistsInNews.id,
    },
  });
};
