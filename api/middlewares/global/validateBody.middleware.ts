import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validateBodyMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    console.log("req.body", req.body);
    const validated = schema.parse(req.body);
    console.log("validated", validated);
    req.body = validated;
    next();
  };
