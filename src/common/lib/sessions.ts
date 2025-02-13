import { Request, Response } from "express";
import jwt, { sign } from "jsonwebtoken";
import { IUserToken, IuserTokenInfos } from "@/interfaces/users.interfaces";
import {
  iAuthUserResponse,
  iIdToken,
} from "@/modules/security/interfaces/auth.intercace";

const ACCESS_TOKEN_SECRET = String(process.env.ACCESS_TOKEN_SECRET);
const REFRESH_TOKEN_SECRET = String(process.env.REFRESH_TOKEN_SECRET);
const APP_DOMAIN = process.env.APP_DOMAIN;

export const decodeAccessToken = (token: string): IuserTokenInfos => {
  try {
    if (!token) {
      throw new Error("Invalid access token");
    }

    const decoded = jwt.decode(token) as IuserTokenInfos;
    if (!decoded) {
      throw new Error("Failed to decode token");
    }
    return decoded;
  } catch (error) {
    throw new Error("Invalid access token");
  }
};

export const generateIdToken = (findUser: iIdToken): string => {
  return sign(
    {
      fullname: findUser.fullname,
      email: findUser.email,
      phone: findUser.phone,
      country: findUser.country,
      typeIdentification: findUser.typeIdentification,
      identification: findUser.identification,
      tenantId: findUser.tenantId,
      subdomain: findUser.subdomain,
      role: findUser.role,
      emailVerified: findUser.emailVerified,
      type: "idToken",
    },
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1h",
      subject: String(findUser.id),
    }
  );
};

export const verifyEmailVerificationToken = (
  token: string
): { id: string; email: string } => {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET) as {
      id: string;
      email: string;
    };
  } catch (error) {
    throw new Error("Invalid email verification token");
  }
};

export const generateMagicLoginToken = (user: {
  id: string;
  email: string;
  tenant: string;
}): string => {
  return sign(
    {
      id: user.id,
      email: user.email,
      tenant: user.tenant,
      type: "emailVerification",
    },
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );
};

export const generateAccessToken = (findUser: IUserToken): string => {
  return sign(
    {
      email: findUser.email,
      tenantId: findUser.tenantId,
      subdomain: findUser.subdomain,
      role: findUser.role,
      type: "access",
    },
    ACCESS_TOKEN_SECRET,
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
      role: findUser.role,
      type: "refresh",
    },
    REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
      subject: String(findUser.id),
    }
  );
};

export const verifyAccessToken = (token: string): IuserTokenInfos => {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET) as IuserTokenInfos;
  } catch (error) {
    throw new Error("Invalid access token");
  }
};

export const verifyRefreshToken = (token: string): IuserTokenInfos => {
  try {
    return jwt.verify(token, REFRESH_TOKEN_SECRET) as IuserTokenInfos;
  } catch (error) {
    throw new Error("Invalid refresh token");
  }
};

export const createTokenSession = async (
  req: Request,
  res: Response,
  accessToken: string,
  refreshToken: string,
  userInfo: iAuthUserResponse | null
) => {
  const decoded = decodeAccessToken(accessToken);

  console.log(`dominio: ${decoded.subdomain}.${APP_DOMAIN}`);

  // decoded.
  res.cookie("authToken", JSON.stringify({ accessToken, refreshToken }), {
    expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    domain: `.${APP_DOMAIN}`,
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
  });

  if (userInfo) {
    res.cookie("userInfo", JSON.stringify(userInfo), {
      expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      domain: `.${APP_DOMAIN}`,
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    });
  }

  return res;
};
