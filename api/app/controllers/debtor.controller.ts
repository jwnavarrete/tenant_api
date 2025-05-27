import { Request, Response } from "express";
import { IRegisterDebtor } from "../interfaces/debtor.interface";
import { debtorService } from "../services/debtor.service";
import { IuserTokenInfos } from "../interfaces/auth.intercace";

export const createDebtorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const body: IRegisterDebtor = req.body;
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    const tenantId = userInfosToken?.tenantId;

    const response = await debtorService.createDebtorIfNotExists(
      tenantId,
      body
    );

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the debtor." });
  }
};

export const getDebtorByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id;
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    const tenantId = userInfosToken?.tenantId;

    const response = await debtorService.getDebtorById(tenantId, id);

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving the debtor." });
  }
};

export const getAllDebtorsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    
    const tenantId = userInfosToken?.tenantId;

    const response = await debtorService.getAllDebtors(tenantId);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving the debtors." });
  }
};

export const updateDebtorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id;
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    const tenantId = userInfosToken?.tenantId;
    const body: Partial<IRegisterDebtor> = req.body;

    const response = await debtorService.updateDebtor(tenantId, id, body);

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the debtor." });
  }
};
