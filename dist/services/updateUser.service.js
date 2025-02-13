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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = void 0;
const server_1 = require("@/server");
const users_schemas_1 = require("@/schemas/users.schemas");
const bcryptjs_1 = require("bcryptjs");
const updateUserService = (userIdParams, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.password) {
        payload.password = yield (0, bcryptjs_1.hash)(payload.password, 10);
    }
    const updateUser = yield server_1.prisma.user.update({
        where: {
            id: String(userIdParams),
        },
        data: Object.assign({}, payload),
    });
    const responseUserSerializer = users_schemas_1.UserReturnCreatedSchema.parse(updateUser);
    return responseUserSerializer;
});
exports.updateUserService = updateUserService;
