import "dotenv/config";
import { iCreateUrlsPagination } from "@/modules/example/interfaces/news.interfaces";

export const createUrlsPagination = (
  perPage: number,
  pageInitial: number,
  orderBy: string,
  countNews: number,
  typeFilter: string | undefined,
  typeOptions: string[]
): iCreateUrlsPagination => {
  const baseUrl = process.env.BASE_URL;

  let urlNextPage: string | null = "";
  let urlPreviousPage: string | null = "";
  const nextPageNumber: number = pageInitial + 1;
  const previousPageNumber: number = pageInitial - 1;

  urlNextPage =
    perPage * pageInitial < countNews
      ? `${baseUrl}/news/?orderBy=${orderBy}&page=${nextPageNumber}&perPage=${perPage}`
      : null;

  urlPreviousPage =
    nextPageNumber > 2
      ? `${baseUrl}/news/?orderBy=${orderBy}&page=${previousPageNumber}&perPage=${perPage}`
      : null;

  if (typeFilter && typeOptions.includes(typeFilter)) {
    urlNextPage = urlNextPage && `${urlNextPage}&typeNews=${typeFilter}`;
    urlPreviousPage =
      urlPreviousPage && `${urlPreviousPage}&typeNews=${typeFilter}`;
  }

  return { urlNextPage, urlPreviousPage };
};
