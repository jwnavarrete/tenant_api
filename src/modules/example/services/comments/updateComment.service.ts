import { prisma } from "@/server";
import * as commentsInterfaces from "@/modules/example/interfaces/comments.interfaces";
import { CommentsCreateReturnSchema } from "@/modules/example/schemas/comments.schemas";

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
