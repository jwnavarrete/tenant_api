import { NextFunction, Request, Response } from "express";

export const validatePermissionUserAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // const userInfosToken: IuserTokenInfos = req.userTokenInfos;

  // if (userInfosToken.admin === false) {
  //   throw new AppError("Insufficient permission", 403);
  // }

  next();
};
