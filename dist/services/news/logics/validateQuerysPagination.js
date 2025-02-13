"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuerysPagination = void 0;
const validateQuerysPagination = (req, countNews) => {
    var _a;
    let orderBy = ((_a = req.query.orderBy) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase()) || "desc";
    const sortOrder = ["asc", "desc"];
    if (!sortOrder.includes(orderBy))
        orderBy = "desc";
    let page = Number(req.query.page) || 1;
    let perPage = Number(req.query.perPage) || 5;
    let pageInitial = 0;
    if (page <= 0)
        page = 1;
    if ((page - 1) * perPage >= countNews)
        page = 1;
    if (perPage <= 0)
        perPage = 5;
    pageInitial = page;
    page = perPage * (page - 1);
    return { perPage, page, pageInitial, orderBy };
};
exports.validateQuerysPagination = validateQuerysPagination;
