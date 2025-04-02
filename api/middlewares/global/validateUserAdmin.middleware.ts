import { IuserTokenInfos } from "../../app/interfaces/auth.intercace";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";
import { ROLES } from "../../common/lib/constant";

export const validatePermissionUserAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userInfosToken: IuserTokenInfos = req.userTokenInfos;

  if (userInfosToken.role !== ROLES.TENANT_ADMIN) {
    throw new AppError("Insufficient permission", 403);
  }

  next();
};
