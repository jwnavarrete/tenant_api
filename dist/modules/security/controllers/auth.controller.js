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
exports.saludo = exports.AuthCheckEmailExistsController = exports.AuthResendVerificationEmailController = exports.AuthVerifyEmailController = exports.AuthSingInController = exports.AuthRefreshTokenController = exports.authValidaSubdomainController = exports.authSignUpController = void 0;
const authServices = __importStar(require("../services/auth.service"));
const authSignUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const response = yield authServices.signUp(body);
    return res.status(201).json(response);
});
exports.authSignUpController = authSignUpController;
const authValidaSubdomainController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const body = req.body;
    const subdomain = body.subdomain;
    let isValid = false;
    if (!subdomain) {
        return res.status(400).json({ error: "Subdomain is required" });
    }
    const exists = yield authServices.validaSubdomain(subdomain);
    if (exists) {
        isValid = true;
    }
    const allowedSubdomains = ((_a = process.env.ALLOWED_SUBDOMAINS) === null || _a === void 0 ? void 0 : _a.split(",")) || [];
    if (allowedSubdomains.includes(subdomain)) {
        isValid = true;
    }
    res.json({ subdomain, isValid });
});
exports.authValidaSubdomainController = authValidaSubdomainController;
const AuthRefreshTokenController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(400).json({ error: "Refresh token is required" });
    }
    const response = yield authServices.refreshToken(refreshToken);
    return res.status(201).json(response);
});
exports.AuthRefreshTokenController = AuthRefreshTokenController;
const AuthSingInController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.email || !body.password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    const response = yield authServices.signIn(body);
    return res.status(201).json(response);
});
exports.AuthSingInController = AuthSingInController;
const AuthVerifyEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    if (!payload) {
        return res.status(400).json({ error: "Token is required" });
    }
    const response = yield authServices.validaEmailVerificationToken(payload);
    return res.status(201).json(response);
});
exports.AuthVerifyEmailController = AuthVerifyEmailController;
const AuthResendVerificationEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const response = yield authServices.resendVerificationEmail(payload);
    return res.status(200).json(response);
});
exports.AuthResendVerificationEmailController = AuthResendVerificationEmailController;
const AuthCheckEmailExistsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const exists = yield authServices.emailExists(email);
    return res.status(200).json({ email, exists });
});
exports.AuthCheckEmailExistsController = AuthCheckEmailExistsController;
const saludo = (req, res) => {
    const { name } = req.body;
    return res.status(200).json({ message: `Hola ${name}` });
};
exports.saludo = saludo;
