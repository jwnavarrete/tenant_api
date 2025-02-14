import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validateQueryMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    console.log("req.query", req.query);

    const validated = schema.parse(req.query);
    console.log("validated", validated);
    req.query = validated;
    next();
  };
