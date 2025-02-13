import { prisma } from "@/index";

export const deleteCommentsByIdService = async (
  commentId: string
): Promise<void> => {
  await prisma.newsComments.delete({
    where: {
      id: Number(commentId),
    },
  });
};
