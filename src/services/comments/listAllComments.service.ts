import { iCommentsListReturn } from "@/interfaces/comments.interfaces";
import { listCommentsReturn } from "@/schemas/comments.schemas";
import { prisma } from "@/server";

export const listAllCommentsService =
  async (): Promise<iCommentsListReturn> => {
    const listComments = await prisma.newsComments.findMany({
      include: {
        user: true,
      },
    });

    const response: iCommentsListReturn =
      listCommentsReturn.parse(listComments);
    return response;
  };
