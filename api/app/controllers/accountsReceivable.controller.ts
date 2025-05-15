import { Request, Response } from "express";
import { accountsReceivableService } from "../services/accountsReceivable.service";
import { IExcelImportArray } from "../interfaces/accountsReceivable.interface";
import { IuserTokenInfos } from "../interfaces/auth.intercace";
import { notificationService } from "../services/Notification.service";
//
export const registerAccountsReceivables = async (
  req: Request,
  res: Response
) => {
  const userInfosToken: IuserTokenInfos = req.userTokenInfos;
  const dataImport: IExcelImportArray = req.body || [];
  const tenantId = userInfosToken?.tenantId;

  console.log(dataImport);
  if (!tenantId) {
    return res.status(400).json({
      error: "Tenant ID is missing",
    });
  }

  if (!dataImport.length) {
    return res.status(400).json({
      error: "No hay datos para importar",
    });
  }
  // Registramos los datos
  const message =
    await accountsReceivableService.registerAccountsReceivableBatch(
      tenantId,
      dataImport
    );
  return res.json({
    status: "success",
    message,
  });
};

export const registerAccountReceivable = async (
  req: Request,
  res: Response
) => {
  const userInfosToken: IuserTokenInfos = req.userTokenInfos;
  const dataImport = req.body;
  const tenantId = userInfosToken?.tenantId;

  if (!tenantId) {
    return res.status(400).json({
      error: "Tenant ID is missing",
    });
  }

  if (!dataImport) {
    return res.status(400).json({
      error: "No hay datos para importar",
    });
  }
  // Registramos los datos
  const message = await accountsReceivableService.registerAccountsReceivable(
    tenantId,
    dataImport
  );
  
  return res.json({
    status: "success",
    message,
  });
};

export const getAllReceivables = async (req: Request, res: Response) => {
  const userInfosToken: IuserTokenInfos = req.userTokenInfos;
  const tenantId = userInfosToken?.tenantId;

  if (!tenantId) {
    return res.status(400).json({
      error: "Tenant ID is missing",
    });
  }

  const invoices = await accountsReceivableService.getAllReceivables(tenantId);
  return res.json({ invoices });
};

export const deleteReceivable = async (req: Request, res: Response) => {
  const userInfosToken: IuserTokenInfos = req.userTokenInfos;
  const tenantId = userInfosToken?.tenantId;
  const invoiceId = req.params.id;

  if (!tenantId) {
    return res.status(400).json({
      error: "Tenant ID is missing",
    });
  }

  if (!invoiceId) {
    return res.status(400).json({
      error: "Invoice ID is missing",
    });
  }

  const invoice = await accountsReceivableService.deleteReceivable(invoiceId);
  return res.json({ invoice });
};

export const getReceivablesByUser = async (req: Request, res: Response) => {
  const userInfosToken: IuserTokenInfos = req.userTokenInfos;
  const tenantId = userInfosToken?.tenantId;
  const userId = userInfosToken.sub;

  // const debtorId = req.params.id;
  if (!tenantId) {
    return res.status(400).json({
      error: "Tenant ID is missing",
    });
  }
  if (!userId) {
    return res.status(400).json({
      error: "User ID is missing",
    });
  }
  const invoices = await accountsReceivableService.getReceivablesByUser(
    tenantId,
    userId
  );
  return res.json({ invoices });
};

export const sendNotificationController = async (
  req: Request,
  res: Response
) => {
  const userInfosToken: IuserTokenInfos = req.userTokenInfos;
  const tenantId = userInfosToken?.tenantId;
  const invoiceId = req.params.id;

  if (!tenantId) {
    return res.status(400).json({
      error: "Tenant ID is missing",
    });
  }

  if (!invoiceId) {
    return res.status(400).json({
      error: "Invoice ID is missing",
    });
  }


  const result = await notificationService.sendNotification(
    tenantId,
    invoiceId
  );

  return res.json({
    status: "success",
    result,
  });
};
