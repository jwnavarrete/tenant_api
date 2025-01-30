import { prisma } from "@/server";

export const deleteTagsService = async (tagId: string): Promise<void> => {
  await prisma.tag.delete({
    where: {
      id: Number(tagId),
    },
  });
};
