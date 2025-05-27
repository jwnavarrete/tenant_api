import { Request, Response } from "express";
import { debtorContributionService } from "../services/debtorContribution.service";
import {
    ICreateDebtorContribution,
    IUpdateDebtorContributionStatus,
    IPartialCompanyContribution,
    IDebtorContributionStatusQuery
} from "../interfaces/DebtorContribution.interface";
import { IuserTokenInfos } from "../interfaces/auth.intercace";

// Crear una contribución
export const createDebtorContributionController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const body: ICreateDebtorContribution = req.body;
        const userInfosToken: IuserTokenInfos = req.userTokenInfos;
        const tenantId = userInfosToken?.tenantId;
        
        const response = await debtorContributionService.createContribution(tenantId, body);

        return res.status(201).json(response);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ error: "An error occurred while creating the contribution." });
    }
};

// Agregar información de la empresa a una contribución
export const addCompanyInfoToContributionController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { id } = req.params;
        const payload: IPartialCompanyContribution = req.body;
        const response = await debtorContributionService.addCompanyInfoToContribution(id, payload);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ error: "An error occurred while adding company info to the contribution." });
    }
};
// Obtener todas las contribuciones (admin)
export const getAllDebtorContributionsController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const payload : IDebtorContributionStatusQuery = req.query;

        const response = await debtorContributionService.getAllContributions(payload);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ error: "An error occurred while retrieving contributions." });
    }
};

// Obtener contribuciones pendientes por empresa
export const getDebtorContributionsByCompanyAndStatusController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const userInfosToken: IuserTokenInfos = req.userTokenInfos;
        const tenantId = userInfosToken?.tenantId;
        const payload : IDebtorContributionStatusQuery = req.query;
        const response = await debtorContributionService.getContributionsByCompanyAndStatus(tenantId, payload);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ error: "An error occurred while retrieving contributions by status." });
    }
};

// Validar o rechazar una contribución
export const updateDebtorContributionStatusController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { contributionId } = req.params;
        const payload: IUpdateDebtorContributionStatus = req.body;
        const response = await debtorContributionService.updateContributionStatus(contributionId, payload);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ error: "An error occurred while updating the contribution status." });
    }
};

// Obtener contribuciones por deudor
export const getDebtorContributionsByDebtorController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { id } = req.params;
        const response = await debtorContributionService.getContributionsByDebtor(id);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ error: "An error occurred while retrieving debtor contributions." });
    }
};
