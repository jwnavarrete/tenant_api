import { Request, Response } from "express";
import {
  IInviteUser,
  IUserResponse,
  IUserUpdate,
} from "../interfaces/user.intercace";
import { userService } from "../services/user.service";
import { IuserTokenInfos } from "../interfaces/auth.intercace";

export const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;

    const data = await userService.getUsers(
      {
        page: Number(page),
        limit: Number(limit),
        search: String(search),
      },
      userInfosToken.tenantId
    );

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error retrieving users" });
  }
};

export const inviteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const inviteParam: IInviteUser = req.body;
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;

    if (inviteParam.emails.length === 0) {
      return res.status(400).json({ error: "Emails are required" });
    }

    // Obtenemos la informacion del token para obtener el tenantId y el sub
    const { tenantId, sub } = userInfosToken;

    const invitedById = sub;

    const invitationResult = await userService.inviteUser(
      inviteParam,
      tenantId,
      invitedById
    );

    return res.status(200).json(invitationResult);
  } catch (error) {
    if (error instanceof Error) {
      // console.log(error.message);
      return res.status(500).json({ error: error.message });
    } else {
      // console.log("Error inviting user");
      return res.status(500).json({ error: "Error inviting user" });
    }
  }
};

export const resendInvitationController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userId } = req.params;

    // No es necesario el tenant porque el id es unico
    const resendResult = await userService.resendInvitation(userId);

    if (!resendResult) {
      return res.status(400).json({ error: "Failed to resend invitation" });
    }

    return res.status(200).json({ message: "Invitation resent successfully" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error: "Error resending invitation" });
    }
  }
};

export const verifyInvitationTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { token, userId } = req.body;

    const isValid = await userService.verifyInvitationToken(userId, token);

    if (!isValid) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    return res.status(200).json({ message: "Token is valid" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error: "Error verifying token" });
    }
  }
};

export const registerInvitedUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { token, userId, password, fullname } = req.body;

    const isValid = await userService.verifyInvitationToken(userId, token);
    if (!isValid) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    const registrationResult = await userService.registerInvitedUser(
      userId,
      password,
      fullname
    );

    if (!registrationResult) {
      return res.status(400).json({ error: "Registration failed" });
    }

    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error: "Error registering user" });
    }
  }
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userId } = req.params;

    const UserParam: IUserUpdate = req.body;

    const userUpdated = await userService.updateUser(userId, UserParam);

    return res.status(200).json(userUpdated);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error: "Error deactivating user" });
    }
  }
};
