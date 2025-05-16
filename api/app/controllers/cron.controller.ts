import { Request, Response } from "express";
import { cronService } from "../services/cron.service";

export const processNotificationsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response = await cronService.processNotifications();

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the debtor." });
  }
};

export const sendPendingNotificationsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response = await cronService.sendPendingNotifications();

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the debtor." });
  }
};
