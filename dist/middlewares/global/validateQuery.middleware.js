"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryMiddleware = void 0;
const validateQueryMiddleware = (schema) => (req, res, next) => {
    console.log("req.query", req.query);
    const validated = schema.parse(req.query);
    console.log("validated", validated);
    req.query = validated;
    next();
};
exports.validateQueryMiddleware = validateQueryMiddleware;
