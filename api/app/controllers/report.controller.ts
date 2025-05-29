import { Request, Response } from "express";
import { reportService } from "../services/report.service";

export const paymentAgreementReportController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { invoiceId } = req.params;

        if (!invoiceId) {
            return res.status(400).json({ error: "invoiceId is required" });
        }

        const result = await reportService.PaymentAgreementReport(invoiceId);

        return res.status(200).json({ message: result });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ error: "An error occurred while generating the report." });
    }
};
