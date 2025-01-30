import { Tag } from "@prisma/client";
import { prisma } from "@/server";

export const retrieveTagsService = async (): Promise<Tag[]> => {
  const listTags: Tag[] = await prisma.tag.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return listTags;
};
