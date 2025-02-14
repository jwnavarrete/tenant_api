import { Request, Response } from "express";
import * as authServices from "../services/auth.service";
import {
  iAuthResponse,
  iAuthTenantSignUp,
  iEmailTokenVerification,
  iRefreshToken,
  iResendVerificationEmail,
  iSignInTenant,
  iSubdomain,
} from "../interfaces/auth.intercace";

export const authSignUpController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const body: iAuthTenantSignUp = req.body;

    const response: iAuthResponse = await authServices.signUp(body);

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Error" });

  }
};

export const authValidaSubdomainController = async (
  req: Request,
  res: Response
) => {
  const body: iSubdomain = req.body;
  const subdomain = body.subdomain;
  let isValid = false;

  if (!subdomain) {
    return res.status(400).json({ error: "Subdomain is required" });
  }
  const exists = await authServices.validaSubdomain(subdomain);

  if (exists) {
    isValid = true;
  }
  const allowedSubdomains = process.env.ALLOWED_SUBDOMAINS?.split(",") || [];

  if (allowedSubdomains.includes(subdomain)) {
    isValid = true;
  }
  res.json({ subdomain, isValid });
};

export const AuthRefreshTokenController = async (
  req: Request,
  res: Response
) => {
  const { refreshToken }: iRefreshToken = req.body;

  if (!refreshToken) {
    return res.status(400).json({ error: "Refresh token is required" });
  }

  const response = await authServices.refreshToken(refreshToken);

  return res.status(201).json(response);
};

export const AuthSingInController = async (req: Request, res: Response) => {
  const body: iSignInTenant = req.body;

  if (!body.email || !body.password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const response: iAuthResponse = await authServices.signIn(body);

  return res.status(201).json(response);
};

export const AuthVerifyEmailController = async (
  req: Request,
  res: Response
) => {
  const payload: iEmailTokenVerification = req.body;

  if (!payload) {
    return res.status(400).json({ error: "Token is required" });
  }

  const response = await authServices.validaEmailVerificationToken(payload);

  return res.status(201).json(response);
};

export const AuthResendVerificationEmailController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: iResendVerificationEmail = req.body;

  const response = await authServices.resendVerificationEmail(payload);

  return res.status(200).json(response);
};

export const AuthCheckEmailExistsController = async (
  req: Request,
  res: Response
) => {
  const { email } = req.body;

  const exists = await authServices.emailExists(email);

  return res.status(200).json({ email, exists });
};

export const saludo = (req: Request, res: Response) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hola ${name}` });
};
