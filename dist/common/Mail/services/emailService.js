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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("@/common/Mail/config/nodemailer"));
const templateRenderer_1 = __importDefault(require("@/common/Mail/utils/templateRenderer"));
class EmailService {
    static sendWelcomeEmail(to, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const html = (0, templateRenderer_1.default)("welcome", { name });
            const mailOptions = {
                from: process.env.SMTP_USER,
                to,
                subject: "Bienvenido a nuestro servicio",
                html,
            };
            yield nodemailer_1.default.sendMail(mailOptions);
        });
    }
    static sendResetPasswordEmail(to, link) {
        return __awaiter(this, void 0, void 0, function* () {
            const html = (0, templateRenderer_1.default)("reset-password", { link });
            const mailOptions = {
                from: process.env.SMTP_USER,
                to,
                subject: "Restablecer contraseña",
                html,
            };
            yield nodemailer_1.default.sendMail(mailOptions);
        });
    }
}
exports.default = EmailService;
