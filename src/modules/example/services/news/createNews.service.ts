import { prisma } from "@/server";
import * as newsInterfaces from "@/modules/example/interfaces/news.interfaces";
import { ReturnNewsCreatedSchema } from "@/modules/example/schemas/news.schemas";

export const createNewsService = async (
  authorId: string,
  payload: newsInterfaces.iNewsCreate
): Promise<newsInterfaces.iReturnNewsCreated> => {
  const { tags, ...dataCreateNews } = payload;
  const tagsUpper = tags.map((name) => name.toUpperCase());

  const createNews = await prisma.news.create({
    data: {
      ...dataCreateNews,
      author: { connect: { id: Number(authorId) } },
    },
  });

  const createdRelationsNewsTags = tagsUpper.map(async (name) => {
    return await prisma.tagsNews.create({
      data: {
        news: {
          connect: {
            id: createNews.id,
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
      id: createNews.id,
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
