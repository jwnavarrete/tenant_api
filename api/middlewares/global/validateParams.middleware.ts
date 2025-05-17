import { NextFunction, Request, Response } from "express";
import { ZodTypeAny, ZodError } from "zod";

export const validateParamsMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
      const validated = schema.parse(req.params);
      req.params = validated;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(400).json({ error: "Unknown error" });
    }
  };
