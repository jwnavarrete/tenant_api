import { prisma } from "@/index";

export const deleteTagsService = async (tagId: string): Promise<void> => {
  await prisma.tag.delete({
    where: {
      id: Number(tagId),
    },
  });
};
