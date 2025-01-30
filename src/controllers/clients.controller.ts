import { Request, Response } from "express";
import * as clientsInterfaces from "@/interfaces/clients.interfaces";
import { IuserTokenInfos } from "@/interfaces/users.interfaces";
import * as clientsServices from "@/services/clients/";

export const createClientsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newsId: string = req.params.id;
  const body: clientsInterfaces.iClientCreateBody = req.body;
  const userInfos: IuserTokenInfos = req.userTokenInfos;
  const newComments: clientsInterfaces.iClientCreateReturn =
    await clientsServices.createClientsService(body, newsId, userInfos);
  return res.status(201).json(newComments);
};
