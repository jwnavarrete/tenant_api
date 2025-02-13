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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const authController = __importStar(require("../controllers/auth.controller"));
const validateBody_middleware_1 = require("@/middlewares/global/validateBody.middleware");
const auth_schemas_1 = require("../schemas/auth.schemas");
const validateTokenJwt_middlewares_1 = require("@/middlewares/global/validateTokenJwt.middlewares");
exports.authRoutes = (0, express_1.Router)();
exports.authRoutes.post("/signup/", (0, validateBody_middleware_1.validateBodyMiddleware)(auth_schemas_1.AuthSignUpSchema), authController.authSignUpController);
exports.authRoutes.post("/validate-subdomain/", (0, validateBody_middleware_1.validateBodyMiddleware)(auth_schemas_1.SubdomainSchema), authController.authValidaSubdomainController);
exports.authRoutes.post("/refresh-token/", (0, validateBody_middleware_1.validateBodyMiddleware)(auth_schemas_1.RefreshTokenSchema), authController.AuthRefreshTokenController);
exports.authRoutes.post("/signin/", (0, validateBody_middleware_1.validateBodyMiddleware)(auth_schemas_1.AuthTenantSchema), authController.AuthSingInController);
exports.authRoutes.post("/verify-email/", (0, validateBody_middleware_1.validateBodyMiddleware)(auth_schemas_1.EmailTokenVerificationSchema), authController.AuthVerifyEmailController);
exports.authRoutes.post("/resend-verification-email/", validateTokenJwt_middlewares_1.validateTokenJwtMiddleware, (0, validateBody_middleware_1.validateBodyMiddleware)(auth_schemas_1.ResendVerificationEmailSchema), authController.AuthResendVerificationEmailController);
exports.authRoutes.post("/validate-email/", (0, validateBody_middleware_1.validateBodyMiddleware)(auth_schemas_1.EmailVerifySchema), authController.AuthCheckEmailExistsController);
exports.authRoutes.get("/saludo", authController.saludo);
