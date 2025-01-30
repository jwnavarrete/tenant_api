import { z } from "zod";
import * as newsSchemas from "../schemas/news.schemas";

export type iNewsCreate = z.infer<typeof newsSchemas.NewsCreateSchema>;
export type iNewsUpdate = z.infer<typeof newsSchemas.NewsUpdateSchema>;
export type iReturnNewsCreated = z.infer<
  typeof newsSchemas.ReturnNewsCreatedSchema
>;
export type iReturnListNews = z.infer<typeof newsSchemas.ReturnListNewsSchema>;

export interface iCreateUrlsPagination {
  urlNextPage: string | null;
  urlPreviousPage: string | null;
}

export interface iValidateQuerysPagination {
  perPage: number;
  page: number;
  pageInitial: number;
  orderBy: string;
}

export interface iReturnListNewsPagination {
  previousPage: string | null;
  nextPage: string | null;
  count: number;
  news: iReturnListNews;
}
