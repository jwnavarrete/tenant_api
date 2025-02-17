import { Request, Response } from "express";
import * as authServices from "../services/auth.service";
import {
  iAuthResponse,
  iAuthTenantSignUp,
  iEmailTokenVerification,
  iMagicLogin,
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

export const AuthSendUrlRecovery = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  await authServices.sendRecoveryUrl(email);

  return res.status(200).json({ message: "Recovery URL sent successfully" });
};

export const AuthVerifyRecoveryToken = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { token }: iMagicLogin = req.body;

  if (!token) {
    return res.status(400).json({ error: "token is required" });
  }

  const response: iAuthResponse = await authServices.validateMagicLoginToken(
    token
  );

  return res.status(200).json(response);
};

export const sendResetPasswordEmailController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, slug } = req.body;

  if (!email || !slug) {
    return res.status(400).json({ error: "Email and slug are required" });
  }

  await authServices.sendResetPasswordEmail(email, slug);

  const message = `if we found a user with email address ${email} in the account, you will receive an email from us shortly`;

  return res.status(200).json({ message });
};

export const validateResetPasswordTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { token, userId } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  const response = await authServices.validateResetPasswordToken(token, userId);

  return res.status(200).json(response);
};

export const resetPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log(req.body);
  const { token, userId, password } = req.body;

  if (!token || !userId || !password) {
    return res.status(400).json({ error: "Token and password are required" });
  }

  const response = await authServices.resetPassword(token, userId, password);

  return res.status(200).json(response);
};
