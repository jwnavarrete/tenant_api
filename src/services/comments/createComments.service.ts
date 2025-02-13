import { prisma } from "@/server";
import * as commentsInterfaces from "@/interfaces/comments.interfaces";
import { IuserTokenInfos } from "@/interfaces/users.interfaces";
import { CommentsCreateReturnSchema } from "@/schemas/comments.schemas";

export const createCommentsService = async (
  payload: commentsInterfaces.iCommentsCreateBody,
  newsId: string,
  userInfos: IuserTokenInfos
): Promise<commentsInterfaces.iCommentsCreateReturn> => {
  const newComment = await prisma.newsComments.create({
    data: {
      message: payload.message!,
      newsId: Number(newsId),
      userId: String(userInfos.email),
    },
    include: {
      user: true,
    },
  });

  const response: commentsInterfaces.iCommentsCreateReturn =
    CommentsCreateReturnSchema.parse(newComment);
  return response;
};
