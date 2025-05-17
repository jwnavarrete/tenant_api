import { Request, Response } from "express";
import { paymentsService } from "../services/Payments.service";
import {
  IRegisterPayment,
  IRegisterPaymentAgreement,
} from "../interfaces/payments.interface";
import { IuserTokenInfos } from "../interfaces/auth.intercace";

export const registerPaymentAgreementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    const tenantId = userInfosToken.tenantId;

    const payload: IRegisterPaymentAgreement = req.body;

    const response = await paymentsService.registerPaymentAgreement(
      tenantId,
      payload
    );

    if (!response) {
      return res.status(400).json({
        error: "No se pudo registrar el acuerdo de pago",
      });
    }
    return res.status(201).json({
      status: "success",
      message: "Acuerdo de pago registrado correctamente",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the debtor." });
  }
};

export const registerPaymentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userInfosToken: IuserTokenInfos = req.userTokenInfos;
    const tenantId = userInfosToken.tenantId;

    const payload: IRegisterPayment = req.body;

    const response = await paymentsService.registerPayment(
      tenantId,
      payload
    );

    if (!response) {
      return res.status(400).json({
        error: "No se pudo registrar el pago",
      });
    }
    return res.status(201).json({
      status: "success",
      message: "Pago registrado correctamente",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while registering the payment." });
  }
};
