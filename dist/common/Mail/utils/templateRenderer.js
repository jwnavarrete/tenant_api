"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const renderTemplate = (templateName, data) => {
    const templatePath = path_1.default.join(__dirname, `../templates/${templateName}.html`);
    let template = fs_1.default.readFileSync(templatePath, 'utf8');
    // Reemplaza los placeholders con los datos proporcionados
    for (const key in data) {
        template = template.replace(new RegExp(`{{${key}}}`, 'g'), data[key]);
    }
    return template;
};
exports.default = renderTemplate;
