import { AppError } from "@/errors";
import { iReturnNewsCreated } from "@/modules/example/interfaces/news.interfaces";
import { iTagsCreate } from "@/modules/example/interfaces/tags.interfaces";
import { ReturnNewsCreatedSchema } from "@/modules/example/schemas/news.schemas";
import { prisma } from "@/server";

export const addTagsInNewsService = async (
  payload: iTagsCreate,
  newsId: string
): Promise<iReturnNewsCreated> => {
  const tagsPayload = payload.tags.map((name) => name.toUpperCase());

  const findRelationsNewsTags = await prisma.tagsNews.findMany({
    where: {
      newsId: Number(newsId),
    },
    include: {
      tag: true,
    },
  });

  const findTagsExistsInNews: string[] = findRelationsNewsTags.map(
    (item) => item.tag.name
  );

  const tagsToAdd: string[] = tagsPayload.filter(
    (tagName) => !findTagsExistsInNews.includes(tagName)
  );

  if (tagsToAdd.length === 0) {
    throw new AppError(`The tags /${payload.tags}/ sent already exist`, 400);
  }

  const createdRelationsNewsTags = tagsToAdd.map(async (name) => {
    return await prisma.tagsNews.create({
      data: {
        news: {
          connect: {
            id: Number(newsId),
          },
        },
        tag: {
          connectOrCreate: {
            where: {
              name,
            },
            create: {
              name,
            },
          },
        },
      },
    });
  });

  await Promise.all(createdRelationsNewsTags);

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

  const responseNewsCreatedSerializer =
    ReturnNewsCreatedSchema.parse(find_news);
  return responseNewsCreatedSerializer;
};
