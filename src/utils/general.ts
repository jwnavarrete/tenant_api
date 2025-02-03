import { sign } from "jsonwebtoken";
import { IUserToken } from "@/interfaces/users.interfaces";

const secretKey = String(process.env.SECRET_KEY);

export const generateAccessToken = (findUser: IUserToken): string => {
    return sign(
      {
        email: findUser.email,
        tenantId: findUser.tenantId,
        subdomain: findUser.subdomain,
        type: "access",
      },
      secretKey,
      {
        expiresIn: "1h",
        subject: String(findUser.id),
      }
    );
  };

export const generateRefreshToken = (findUser: IUserToken): string => {
    return sign(
        {
            email: findUser.email,
            tenantId: findUser.tenantId,
            subdomain: findUser.subdomain,
            type: "refresh",
        },
        secretKey,
        {
            expiresIn: "7d",
            subject: String(findUser.id),
        }
    );
};