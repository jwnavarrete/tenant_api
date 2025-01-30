import { z } from "zod";
import * as commentsSchemas from "../schemas/comments.schemas";

export type iCommentsCreateBody = z.infer<
  typeof commentsSchemas.CommentsCreateSchema
>;
export type iCommentsCreateReturn = z.infer<
  typeof commentsSchemas.CommentsCreateReturnSchema
>;
export type iCommentsListReturn = z.infer<
  typeof commentsSchemas.listCommentsReturn
>;
