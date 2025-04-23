import { Request, Response } from "express";
import { accountsReceivableService } from "../services/accountsReceivable.service";
import { IExcelImportArray } from "../interfaces/accountsReceivable.interface";
import { IuserTokenInfos } from "../interfaces/auth.intercace";
import { notificationService } from "../services/Notification.service";
//
export const registerInvoices = async (req: Request, res: Response) => {
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
  const message = await accountsReceivableService.registerInvoices(
    tenantId,
    dataImport
  );
  return res.json({
    status: "success",
    message,
  });
};

export const registerInvoice = async (req: Request, res: Response) => {
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
  const message = await accountsReceivableService.registerInvoice(
    tenantId,
    dataImport
  );
  return res.json({
    status: "success",
    message,
  });
};

export const getAllInvoices = async (req: Request, res: Response) => {
  const userInfosToken: IuserTokenInfos = req.userTokenInfos;
  const tenantId = userInfosToken?.tenantId;

  if (!tenantId) {
    return res.status(400).json({
      error: "Tenant ID is missing",
    });
  }

  const invoices = await accountsReceivableService.getAllInvoices(tenantId);
  return res.json({ invoices });
};

export const deleteInvoice = async (req: Request, res: Response) => {
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

  const invoice = await accountsReceivableService.deleteInvoice(invoiceId);
  return res.json({ invoice });
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
