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
exports.updateUserController = exports.deleteUserController = exports.retrieveProfileUserContoller = exports.retrieveUsersController = exports.loginRefreshUsersController = exports.loginUsersController = exports.createUsersController = void 0;
const usersServices = __importStar(require("@/services/index"));
const createUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const newUser = yield usersServices.createUsersService(body);
    return res.status(201).json(newUser);
});
exports.createUsersController = createUsersController;
const loginUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const tokens = yield usersServices.loginUsersService(body, res);
    return res.status(200).json(tokens);
});
exports.loginUsersController = loginUsersController;
const loginRefreshUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const token = yield usersServices.loginRefreshUsersService(body, req);
    return res.status(200).json({ token });
});
exports.loginRefreshUsersController = loginRefreshUsersController;
const retrieveUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield usersServices.retrieveUsersService();
    return res.status(200).json(listUsers);
});
exports.retrieveUsersController = retrieveUsersController;
const retrieveProfileUserContoller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const userProfile = yield usersServices.retrieveProfileUserService(userId);
    return res.status(200).json(userProfile);
});
exports.retrieveProfileUserContoller = retrieveProfileUserContoller;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    yield usersServices.deleteUserService(userId);
    return res.status(204).json();
});
exports.deleteUserController = deleteUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userIdParams = req.params.id;
    const body = req.body;
    const updateUser = yield usersServices.updateUserService(userIdParams, body);
    return res.status(200).json(updateUser);
});
exports.updateUserController = updateUserController;
