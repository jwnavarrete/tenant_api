import { prisma } from "@/server";
import * as commentsInterfaces from "@/interfaces/comments.interfaces";
import { CommentsCreateReturnSchema } from "@/schemas/comments.schemas";

export const updateCommentsService = async (
  payload: commentsInterfaces.iCommentsCreateBody,
  commentId: string
): Promise<commentsInterfaces.iCommentsCreateReturn> => {
  const updateComment = await prisma.newsComments.update({
    where: {
      id: Number(commentId),
    },
    data: {
      message: payload.message!,
    },
    include: {
      user: true,
    },
  });

  const response: commentsInterfaces.iCommentsCreateReturn =
    CommentsCreateReturnSchema.parse(updateComment);
  return response;
};
