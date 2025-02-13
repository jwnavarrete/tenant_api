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
exports.updateNewsController = exports.deleteNewsController = exports.retrieveNewsByUserIdController = exports.retrieveNewsByIdController = exports.retrieveNewsController = exports.createNewsController = void 0;
const newsServices = __importStar(require("@/services/news"));
const createNewsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authorId = req.userTokenInfos.id;
    const body = req.body;
    const newsCreated = yield newsServices.createNewsService(authorId, body);
    return res.status(201).json(newsCreated);
});
exports.createNewsController = createNewsController;
const retrieveNewsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newsList = yield newsServices.retrieveNewsService(req);
    return res.status(200).json(newsList);
});
exports.retrieveNewsController = retrieveNewsController;
const retrieveNewsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newsId = req.params.id;
    const news = yield newsServices.retrieveNewsByIdService(newsId);
    return res.status(200).json(news);
});
exports.retrieveNewsByIdController = retrieveNewsByIdController;
const retrieveNewsByUserIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userTokenInfos.id;
    const news = yield newsServices.retrieveNewsByUserIdService(userId);
    return res.status(200).json(news);
});
exports.retrieveNewsByUserIdController = retrieveNewsByUserIdController;
const deleteNewsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newsId = req.params.id;
    yield newsServices.deleteNewsService(newsId);
    return res.status(204).json();
});
exports.deleteNewsController = deleteNewsController;
const updateNewsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newsId = req.params.id;
    const body = req.body;
    const updatedNews = yield newsServices.updateNewsService(newsId, body);
    return res.status(200).json(updatedNews);
});
exports.updateNewsController = updateNewsController;
