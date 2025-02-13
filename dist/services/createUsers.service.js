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
exports.createUsersService = void 0;
const createUsersService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // const findEmailUser: User | null = await prisma.user.findUnique({
    //   where: {
    //     email: payload.email,
    //   },
    // });
    // if (findEmailUser) {
    //   throw new AppError("Email already exists", 409);
    // }
    // payload.password = await hash(payload.password, 10);
    // const user: User = await prisma.user.create({
    //   data: {
    //     ...payload,
    //     tenant: payload.tenant,
    //   },
    // });
    // const responseUser: usersInterfaces.iUserReturnCreated =
    //   UserReturnCreatedSchema.parse(user);
    // return responseUser;
    return {};
});
exports.createUsersService = createUsersService;
