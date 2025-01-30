import { Request, Response } from "express";
import * as newsInterfaces from "../interfaces/news.interfaces";
import * as newsServices from "../services/news";

export const createNewsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const authorId: string = req.userTokenInfos.id;
  const body: newsInterfaces.iNewsCreate = req.body;
  const newsCreated: newsInterfaces.iReturnNewsCreated =
    await newsServices.createNewsService(authorId, body);
  return res.status(201).json(newsCreated);
};

export const retrieveNewsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newsList: newsInterfaces.iReturnListNewsPagination =
    await newsServices.retrieveNewsService(req);
  return res.status(200).json(newsList);
};

export const retrieveNewsByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newsId: string = req.params.id;
  const news: newsInterfaces.iReturnNewsCreated =
    await newsServices.retrieveNewsByIdService(newsId);
  return res.status(200).json(news);
};

export const retrieveNewsByUserIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.userTokenInfos.id;
  const news: newsInterfaces.iReturnListNews =
    await newsServices.retrieveNewsByUserIdService(userId);
  return res.status(200).json(news);
};

export const deleteNewsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newsId: string = req.params.id;
  await newsServices.deleteNewsService(newsId);
  return res.status(204).json();
};

export const updateNewsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newsId: string = req.params.id;
  const body: newsInterfaces.iNewsUpdate = req.body;
  const updatedNews: newsInterfaces.iReturnNewsCreated =
    await newsServices.updateNewsService(newsId, body);
  return res.status(200).json(updatedNews);
};
