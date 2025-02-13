"use strict";
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
exports.loginRefreshUsersService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const loginRefreshUsersService = (payload, req) => __awaiter(void 0, void 0, void 0, function* () {
    // verify(
    //   payload.token,
    //   String(process.env.SECRET_KEY),
    //   (error: VerifyErrors | null, decoded: any) => {
    //     if (error) {
    //       throw new AppError("jwt refresh expired", 401);
    //     }
    //     req.userTokenInfos = {
    //       email: decoded.email,
    //       id: decoded.sub,
    //       // admin: decoded.admin,
    //     };
    //     return;
    //   }
    // );
    // expiresIn: process.env.REFRESH_TOKEN_LIFE || "1h",
    const accessToken = (0, jsonwebtoken_1.sign)({
        email: req.userTokenInfos.email,
        // admin: req.userTokenInfos!.admin,
        type: "access",
    }, String(process.env.SECRET_KEY), {
        expiresIn: "7h",
        subject: String(req.userTokenInfos.id),
    });
    return accessToken;
});
exports.loginRefreshUsersService = loginRefreshUsersService;
