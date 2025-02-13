"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUrlsPagination = void 0;
require("dotenv/config");
const createUrlsPagination = (perPage, pageInitial, orderBy, countNews, typeFilter, typeOptions) => {
    const baseUrl = process.env.BASE_URL;
    let urlNextPage = "";
    let urlPreviousPage = "";
    const nextPageNumber = pageInitial + 1;
    const previousPageNumber = pageInitial - 1;
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
exports.createUrlsPagination = createUrlsPagination;
