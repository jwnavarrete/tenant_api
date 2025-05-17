import { Request, Response } from "express";
import {
  IParamCobro,
  ITenantConfigResponse,
} from "../interfaces//tenantConfig.interface";
import { tenantConfigService } from "../services/tenantConfig.service";
import { IuserTokenInfos } from "../interfaces/auth.intercace";

export const getTenantConfig = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    const tenantId = userInfosToken.tenantId;
    const parameterId = req.params.parameterId;

    const response: ITenantConfigResponse =
      await tenantConfigService.getTenantConfig(tenantId, parameterId);

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateTenantConfig = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    const tenantId = userInfosToken.tenantId;
    const parameterId = req.params.parameterId;
    const body: Partial<IParamCobro> = req.body;

    const response = await tenantConfigService.updateTenantConfig(
      tenantId,
      parameterId,
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
