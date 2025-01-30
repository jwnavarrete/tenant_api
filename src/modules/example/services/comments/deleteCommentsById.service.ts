import { prisma } from "@/server";

export const deleteCommentsByIdService = async (
  commentId: string
): Promise<void> => {
  await prisma.newsComments.delete({
    where: {
      id: Number(commentId),
    },
  });
};
