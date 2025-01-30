import { NextFunction, Request, Response } from "express";
import { AppError } from "@/errors";
import { IuserTokenInfos } from "@/modules/security/interfaces/users.interfaces";

export const validatePermissionUserAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userInfosToken: IuserTokenInfos = req.userTokenInfos;

  if (userInfosToken.admin === false) {
    throw new AppError("Insufficient permission", 403);
  }

  next();
};
