"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveNewsService = void 0;
const news_schemas_1 = require("@/schemas/news.schemas");
const news_schemas_2 = require("@/schemas/news.schemas");
const server_1 = require("@/server");
const logics = __importStar(require("./logics"));
require("dotenv/config");
const retrieveNewsService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const typeFilter = (_a = req.query.typeNews) === null || _a === void 0 ? void 0 : _a.toString();
    let conditionsWherePrisma;
    if (typeFilter && news_schemas_2.typeOptions.includes(typeFilter)) {
        conditionsWherePrisma = {
            published: true,
            type: typeFilter,
        };
    }
    else {
        conditionsWherePrisma = {
            published: true,
        };
    }
    const countNewsFilter = yield server_1.prisma.news.count({
        where: Object.assign({}, conditionsWherePrisma),
    });
    const { perPage, page, pageInitial, orderBy } = logics.validateQuerysPagination(req, countNewsFilter);
    const { urlNextPage, urlPreviousPage } = logics.createUrlsPagination(perPage, pageInitial, orderBy, countNewsFilter, typeFilter, news_schemas_2.typeOptions);
    const listNews = yield server_1.prisma.news.findMany({
        take: perPage,
        skip: page,
        where: Object.assign({}, conditionsWherePrisma),
        include: {
            author: true,
            tagsList: {
                include: {
                    tag: true,
                },
            },
            commentsList: {
                include: {
                    user: true,
                },
            },
        },
        orderBy: {
            createdAt: orderBy,
        },
    });
    const responseListNewsSerializer = news_schemas_1.ReturnListNewsSchema.parse(listNews);
    const output = {
        previousPage: urlPreviousPage,
        nextPage: urlNextPage,
        count: countNewsFilter,
        news: responseListNewsSerializer,
    };
    return output;
});
exports.retrieveNewsService = retrieveNewsService;
