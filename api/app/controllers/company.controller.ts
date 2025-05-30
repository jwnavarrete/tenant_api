import { Request, Response } from "express";
import {
  IParamCobro, ITenantConfigResponse,
} from "../interfaces//tenantConfig.interface";
import { tenantConfigService } from "../services/tenantConfig.service";
import { companyService } from "../services/company.service";

import { InvitationCompany, } from "../interfaces/company.interface";
import { IuserTokenInfos } from "../interfaces/auth.intercace";


export const createinvitationCompany = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const body: InvitationCompany = req.body;
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    const tenantId = userInfosToken?.tenantId;
    const response = await companyService.createInvitationCompany(
      tenantId,
      body
    );

    return res.status(200).json(response);

  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getInvitationCompanyByToken = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { token } = req.params;
    const response = await companyService.validateCompanyByToken(token);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getAllInvitationByUserId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    const tenantId = userInfosToken?.sub;
    const response = await companyService.getCompanyInvitesByUserId(tenantId);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const cancelInvitationCompany = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const cancellInvitation = await companyService.cancelCompanyInvitation(id);
    if (!cancellInvitation) {
      return res.status(404).json({ message: "Invitación no encontrada" });
    }

    res.status(200).json({ message: "Invitación cancelada exitosamente", data: cancellInvitation });
  } catch (error) {
    console.error("Error al cancelar la invitación:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const resendInvitationCompany = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userInfosToken: IuserTokenInfos = req.userTokenInfos;
  const tenantId = userInfosToken?.tenantId;
  try {
    const success = await companyService.resendCompanyInvitation(tenantId, id);
    if (!success) {
      return res.status(404).json({
        message: "This invitation is no longer available, as it has already been accepted or canceled. Thank you for your understanding."
      });
    }
    res.status(200).json({ message: "Invitation successfully resent." });
  } catch (error) {
    console.error("Error resending the invitation:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};





