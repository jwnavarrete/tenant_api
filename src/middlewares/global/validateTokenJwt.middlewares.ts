import { NextFunction, Request, Response } from "express";
import { AppError } from "@/errors";
import { verify, VerifyErrors } from "jsonwebtoken";
import "dotenv/config";

export const validateTokenJwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const authToken: string | undefined = req.headers.authorization;
  if (!authToken) {
    throw new AppError("Missing bearer token", 401);
  }

  const token: string = authToken.split(" ")[1];

  verify(
    token,
    String(process.env.SECRET_KEY),
    (error: VerifyErrors | null, decoded: any) => {
      if (error) {
        throw new AppError(error.message, 401);
      }
      req.userTokenInfos = {
        email: decoded.email,
        id: decoded.sub,
        admin: decoded.admin,
      };
      return;
    }
  );

  next();
};
