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
exports.retrieveUsersService = void 0;
const server_1 = require("@/server");
const users_schemas_1 = require("@/schemas/users.schemas");
const retrieveUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const findUsers = yield server_1.prisma.user.findMany({
        orderBy: {
            id: "asc",
        },
        where: {
            isDeleted: false,
        },
    });
    const responseListUsersSerializer = users_schemas_1.UserReturnListSchema.parse(findUsers);
    return responseListUsersSerializer;
});
exports.retrieveUsersService = retrieveUsersService;
