import { prisma } from "@/server";
import * as commentsInterfaces from "@/modules/example/interfaces/comments.interfaces";
import { IuserTokenInfos } from "@/modules/security/interfaces/users.interfaces";
import { CommentsCreateReturnSchema } from "@/modules/example/schemas/comments.schemas";

export const createCommentsService = async (
  payload: commentsInterfaces.iCommentsCreateBody,
  newsId: string,
  userInfos: IuserTokenInfos
): Promise<commentsInterfaces.iCommentsCreateReturn> => {
  const newComment = await prisma.newsComments.create({
    data: {
      message: payload.message!,
      newsId: Number(newsId),
      userId: Number(userInfos.id),
    },
    include: {
      user: true,
    },
  });

  const response: commentsInterfaces.iCommentsCreateReturn =
    CommentsCreateReturnSchema.parse(newComment);
  return response;
};
