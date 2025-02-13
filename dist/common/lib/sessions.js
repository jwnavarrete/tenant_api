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
exports.createTokenSession = exports.verifyRefreshToken = exports.verifyAccessToken = exports.generateRefreshToken = exports.generateAccessToken = exports.generateMagicLoginToken = exports.verifyEmailVerificationToken = exports.generateIdToken = exports.decodeAccessToken = void 0;
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const ACCESS_TOKEN_SECRET = String(process.env.ACCESS_TOKEN_SECRET);
const REFRESH_TOKEN_SECRET = String(process.env.REFRESH_TOKEN_SECRET);
const APP_DOMAIN = process.env.APP_DOMAIN;
const decodeAccessToken = (token) => {
    try {
        if (!token) {
            throw new Error("Invalid access token");
        }
        const decoded = jsonwebtoken_1.default.decode(token);
        if (!decoded) {
            throw new Error("Failed to decode token");
        }
        return decoded;
    }
    catch (error) {
        throw new Error("Invalid access token");
    }
};
exports.decodeAccessToken = decodeAccessToken;
const generateIdToken = (findUser) => {
    return (0, jsonwebtoken_1.sign)({
        fullname: findUser.fullname,
        email: findUser.email,
        phone: findUser.phone,
        country: findUser.country,
        typeIdentification: findUser.typeIdentification,
        identification: findUser.identification,
        tenantId: findUser.tenantId,
        subdomain: findUser.subdomain,
        role: findUser.role,
        emailVerified: findUser.emailVerified,
        type: "idToken",
    }, ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
        subject: String(findUser.id),
    });
};
exports.generateIdToken = generateIdToken;
const verifyEmailVerificationToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, ACCESS_TOKEN_SECRET);
    }
    catch (error) {
        throw new Error("Invalid email verification token");
    }
};
exports.verifyEmailVerificationToken = verifyEmailVerificationToken;
const generateMagicLoginToken = (user) => {
    return (0, jsonwebtoken_1.sign)({
        id: user.id,
        email: user.email,
        tenant: user.tenant,
        type: "emailVerification",
    }, ACCESS_TOKEN_SECRET, {
        expiresIn: "24h",
        subject: user.id,
    });
};
exports.generateMagicLoginToken = generateMagicLoginToken;
const generateAccessToken = (findUser) => {
    return (0, jsonwebtoken_1.sign)({
        email: findUser.email,
        tenantId: findUser.tenantId,
        subdomain: findUser.subdomain,
        role: findUser.role,
        type: "access",
    }, ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
        subject: String(findUser.id),
    });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (findUser) => {
    return (0, jsonwebtoken_1.sign)({
        email: findUser.email,
        tenantId: findUser.tenantId,
        subdomain: findUser.subdomain,
        role: findUser.role,
        type: "refresh",
    }, REFRESH_TOKEN_SECRET, {
        expiresIn: "7d",
        subject: String(findUser.id),
    });
};
exports.generateRefreshToken = generateRefreshToken;
const verifyAccessToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, ACCESS_TOKEN_SECRET);
    }
    catch (error) {
        throw new Error("Invalid access token");
    }
};
exports.verifyAccessToken = verifyAccessToken;
const verifyRefreshToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, REFRESH_TOKEN_SECRET);
    }
    catch (error) {
        throw new Error("Invalid refresh token");
    }
};
exports.verifyRefreshToken = verifyRefreshToken;
const createTokenSession = (req, res, accessToken, refreshToken, userInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = (0, exports.decodeAccessToken)(accessToken);
    console.log(`dominio: ${decoded.subdomain}.${APP_DOMAIN}`);
    // decoded.
    res.cookie("authToken", JSON.stringify({ accessToken, refreshToken }), {
        expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        domain: `.${APP_DOMAIN}`,
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    });
    if (userInfo) {
        res.cookie("userInfo", JSON.stringify(userInfo), {
            expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            domain: `.${APP_DOMAIN}`,
            sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
        });
    }
    return res;
});
exports.createTokenSession = createTokenSession;
