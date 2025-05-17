import { Request, Response } from "express";
import { tenantService } from "../services/tenant.service";
import { iQuery } from "../interfaces/tenant.interface";

export const getAllTenant = async (req: Request, res: Response) => {
  const query: iQuery = req.query;

  if (query?.email) {
    const tenants = await tenantService.getAllTenantsByUser(query.email);
    return res.json({ tenants });
  } else {
    // Si no se pasa el correo, devolver todos los tenants
    const tenants = await tenantService.getAllTenant();
    return res.json({ tenants });
  }
};
