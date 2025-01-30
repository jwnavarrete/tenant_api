import { Tag } from "@prisma/client";
import { Request, Response } from "express";
import { iReturnNewsCreated } from "../interfaces/news.interfaces";
import { iTagsCreate } from "../interfaces/tags.interfaces";
import * as tagsServices from "../services/tags";

export const createTagsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: iTagsCreate = req.body;
  const tagsCreated: Tag[] = await tagsServices.createTagsService(body);
  return res.status(201).json(tagsCreated);
};

export const retrieveTagsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listTags: Tag[] = await tagsServices.retrieveTagsService();
  return res.status(200).json(listTags);
};

export const deleteTagsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tagId = req.params.id;
  await tagsServices.deleteTagsService(tagId);
  return res.status(204).json();
};

export const addTagsInNewsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: iTagsCreate = req.body;
  const newsId: string = req.params.id;
  const tagsCreated: iReturnNewsCreated =
    await tagsServices.addTagsInNewsService(body, newsId);
  return res.status(200).json(tagsCreated);
};

export const removeTagsInNewsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tagId: string = req.params.tagId;
  const newsId: string = req.params.newsId;
  await tagsServices.removeTagsInNewsService(tagId, newsId);
  return res.status(204).json();
};
