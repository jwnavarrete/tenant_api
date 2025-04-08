import { Request, Response } from "express";
import { accountsReceivableService } from "../services/accountsReceivable.service";
import { IExcelImportArray, INotification } from "../interfaces/accountsReceivable.interface";
import { IuserTokenInfos } from "../interfaces/auth.intercace";
import { CollectionService } from "../../common/Mail";

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

export const sendNotification = async (req: Request, res: Response) => {
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

  const invoice = await accountsReceivableService.getInvoiceById(invoiceId);

  if (!invoice) {
    return res.status(400).json({
      error: "Invoice not found",
    });
  }

  const calculatedCollection = parseFloat((invoice.invoiceAmount * (invoice.collectionPercentage / 100)).toFixed(2));
  const calculatedABB = parseFloat((invoice.invoiceAmount * (invoice.abbPercentage / 100)).toFixed(2));
  const totalAmount = parseFloat((invoice.invoiceAmount + calculatedCollection + calculatedABB).toFixed(2));
  const days = 5; // This should be calculated based on the invoice and the days overdue
  const validDays = 5;
  const temporaryAccessCode = "123456"; // This should be generated dynamically
  const fine = 93; // This should be calculated based on the invoice and the days overdue

  const notification: INotification = {
    sendDate: new Date().toISOString(),
    invoiceNumber: invoice.invoiceNumber,
    invoiceAmount: invoice.invoiceAmount,
    days: days,
    accountNumber: '123456789',
    collectionPercentage: invoice.collectionPercentage,
    calculatedCollection: calculatedCollection,
    abbPercentage: invoice.abbPercentage,
    calculatedABB: calculatedABB,
    totalAmount: totalAmount,
    fine: fine,
    validDays: validDays,
    temporaryAccessCode: temporaryAccessCode,
  } 

  const result = await CollectionService.sendAanmaning(
    "jwnavarretez@gmail.com",
    notification
  );
  // const result = await accountsReceivableService.sendAanmaning(tenantId, invoiceId);
  return res.json({
    status: "success",
    result,
  });
};
