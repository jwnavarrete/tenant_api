"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBodyMiddleware = void 0;
const validateBodyMiddleware = (schema) => (req, res, next) => {
    console.log("req.body", req.body);
    const validated = schema.parse(req.body);
    console.log("validated", validated);
    req.body = validated;
    next();
};
exports.validateBodyMiddleware = validateBodyMiddleware;
