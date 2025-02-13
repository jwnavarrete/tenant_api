"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTokenJwtMiddleware = void 0;
const errors_1 = require("@/errors");
const sessions_1 = require("@/common/lib/sessions");
require("dotenv/config");
const validateTokenJwtMiddleware = (req, _res, next) => {
    const authToken = req.headers.authorization;
    if (!authToken) {
        throw new errors_1.AppError("Missing bearer token", 401);
    }
    const token = authToken.split(" ")[1];
    try {
        (0, sessions_1.verifyAccessToken)(token);
        const decoded = (0, sessions_1.decodeAccessToken)(token);
        req.userTokenInfos = {
            email: decoded.email,
            id: decoded.sub,
            tenantId: decoded.tenantId,
            subdomain: decoded.subdomain,
            type: decoded.type,
            exp: decoded.exp,
            role: decoded.role,
            sub: decoded.sub,
        };
        next();
    }
    catch (error) {
        if (error instanceof Error) {
            throw new errors_1.AppError(error.message, 401);
        }
        else {
            throw new errors_1.AppError("Unknown error", 401);
        }
    }
};
exports.validateTokenJwtMiddleware = validateTokenJwtMiddleware;
