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
exports.loginUsersService = void 0;
require("dotenv/config");
const loginUsersService = (payload, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const findUserWithTenant = await prisma.user.findUnique({
    //   where: {
    //     tenantId: '3123123',
    //     email: payload.email,
    //   },
    //   include: {
    //     tenant: true,
    //   },
    // });
    // if (!findUserWithTenant) {
    //   throw new AppError("Invalid credentials", 401);
    // }
    // const findUser = findUserWithTenant;
    // logics.validateFindUser(findUser, "Invalid credentials", 401);
    // const passwordMatch: boolean = await compare(
    //   payload.password,
    //   findUser!.password
    // );
    // if (!passwordMatch) {
    //   throw new AppError("Invalid credentials", 401);
    // }
    // const paramToken: IUserToken = {
    //   id: findUser!.id,
    //   email: findUser!.email,
    //   tenantId: findUser!.tenantId,
    //   subdomain: findUser!.tenant.subdomain,
    // };
    // const accessToken = generateAccessToken(paramToken);
    // const refreshToken = generateRefreshToken(paramToken);
    // return { accessToken, refreshToken };
    return {};
});
exports.loginUsersService = loginUsersService;
