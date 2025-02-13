"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const app_1 = __importDefault(require("./app"));
require("module-alias/register");
require("dotenv/config");
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient({ log: ["query"] });
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
