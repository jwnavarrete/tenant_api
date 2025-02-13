"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMailService = exports.EmailService = void 0;
const emailService_1 = __importDefault(require("@/common/Mail/services/emailService"));
exports.EmailService = emailService_1.default;
const authService_1 = __importDefault(require("@/common/Mail/services/authService"));
exports.AuthMailService = authService_1.default;
