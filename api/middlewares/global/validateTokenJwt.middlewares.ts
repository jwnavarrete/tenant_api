import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";
import {
  verifyAccessToken,
  decodeAccessToken,
} from "../../common/lib/sessions";
import "dotenv/config";
import { IuserTokenInfos } from "../../app/interfaces/auth.intercace";

export const validateTokenJwtMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
): Response | void => {
  const authToken: string | undefined = req.headers.authorization;
  if (!authToken) {
    throw new AppError("Missing bearer token", 401);
  }

  const token: string = authToken.split(" ")[1];

  try {
    verifyAccessToken(token);
    const decoded: IuserTokenInfos = decodeAccessToken(token);

    req.userTokenInfos = {
      email: decoded.email,
      id: decoded.sub,
      tenantId: decoded.tenantId,
      subdomain: decoded.subdomain,
      type: decoded.type,
      exp: decoded.exp,
      role: decoded.role,
      sub: decoded.sub,
    };
    
    next();
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 401);
    } else {
      throw new AppError("Unknown error", 401);
    }
  }
};
