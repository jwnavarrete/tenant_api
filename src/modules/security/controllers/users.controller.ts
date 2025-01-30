import { Request, Response } from "express";
import * as usersInterfaces from "../interfaces/users.interfaces";
import * as usersServices from "../services/index";

export const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: usersInterfaces.iUserCreate = req.body;
  const newUser: usersInterfaces.iUserReturnCreated =
    await usersServices.createUsersService(body);
  return res.status(201).json(newUser);
};

export const loginUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: usersInterfaces.iUserLogin = req.body;
  const tokens: usersInterfaces.iUserTokensResponse =
    await usersServices.loginUsersService(body, res);
  return res.status(200).json(tokens);
};

export const loginRefreshUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: usersInterfaces.iUserLoginrefresh = req.body;
  const token: string = await usersServices.loginRefreshUsersService(body, req);
  return res.status(200).json({ token });
};

export const retrieveUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listUsers: usersInterfaces.iUserReturnList =
    await usersServices.retrieveUsersService();
  return res.status(200).json(listUsers);
};

export const retrieveProfileUserContoller = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.params.id;
  const userProfile = await usersServices.retrieveProfileUserService(userId);
  return res.status(200).json(userProfile);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.params.id;
  await usersServices.deleteUserService(userId);
  return res.status(204).json();
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userIdParams: string = req.params.id;
  const body: usersInterfaces.iUserUpdate = req.body;
  const updateUser: usersInterfaces.iUserReturnUpdated =
    await usersServices.updateUserService(userIdParams, body);
  return res.status(200).json(updateUser);
};
