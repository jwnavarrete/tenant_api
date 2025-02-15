import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validateQueryMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const validated = schema.parse(req.query);
    req.query = validated;
    next();
  };
