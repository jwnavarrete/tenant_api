import { Request } from "express";
import { iValidateQuerysPagination } from "@/interfaces/news.interfaces";
export const validateQuerysPagination = (
  req: Request,
  countNews: number
): iValidateQuerysPagination => {
  let orderBy = req.query.orderBy?.toString().toLowerCase() || "desc";
  const sortOrder: string[] = ["asc", "desc"];
  if (!sortOrder.includes(orderBy)) orderBy = "desc";

  let page: number = Number(req.query.page) || 1;
  let perPage: number = Number(req.query.perPage) || 5;
  let pageInitial: number = 0;

  if (page <= 0) page = 1;
  if ((page - 1) * perPage >= countNews) page = 1;
  if (perPage <= 0) perPage = 5;
  pageInitial = page;
  page = perPage * (page - 1);

  return { perPage, page, pageInitial, orderBy };
};
