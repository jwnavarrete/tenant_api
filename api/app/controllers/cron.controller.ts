import { Request, Response } from "express";
import { cronService } from "../services/cron.service";

export const sendCronNotificacionInvoicesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {colectionStatus} = req.body;
    console.log("colectionStatus", colectionStatus);
    
    const response = await cronService.sendSecondNotificationForUnpaidInvoices(
      colectionStatus
    );

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the debtor." });
  }
};
