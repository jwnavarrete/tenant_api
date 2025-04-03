import { Request, Response } from "express";
import { accountsReceivableService } from "../services/accountsReceivable.service";
import { IExcelImportArray } from "../interfaces/accountsReceivable.interface";
import { IuserTokenInfos } from "../interfaces/auth.intercace";

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
  const tenants = await accountsReceivableService.registerInvoices(
    tenantId,
    dataImport
  );
  return res.json({ tenants });
};
