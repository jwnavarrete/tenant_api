import { Request, Response } from "express";
import * as commentsInterfaces from "../interfaces/comments.interfaces";
import * as commentsService from "../services/comments";
import { IuserTokenInfos } from "@/modules/security/interfaces/users.interfaces";

export const createCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newsId: string = req.params.id;
  const body: commentsInterfaces.iCommentsCreateBody = req.body;
  const userInfos: IuserTokenInfos = req.userTokenInfos;
  const newComments: commentsInterfaces.iCommentsCreateReturn =
    await commentsService.createCommentsService(body, newsId, userInfos);
  return res.status(201).json(newComments);
};

export const listAllCommentsByNewsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newsId: string = req.params.id;
  const listComments: commentsInterfaces.iCommentsListReturn =
    await commentsService.listAllCommentsBynewsService(newsId);
  return res.status(200).json(listComments);
};

export const listAllCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listComments: commentsInterfaces.iCommentsListReturn =
    await commentsService.listAllCommentsService();
  return res.status(200).json(listComments);
};

export const deleteCommentsByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const commentId: string = req.params.id;
  await commentsService.deleteCommentsByIdService(commentId);
  return res.status(204).json();
};

export const updateCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const commentId: string = req.params.id;
  const body: commentsInterfaces.iCommentsCreateBody = req.body;
  const updateComments: commentsInterfaces.iCommentsCreateReturn =
    await commentsService.updateCommentsService(body, commentId);
  return res.status(200).json(updateComments);
};
