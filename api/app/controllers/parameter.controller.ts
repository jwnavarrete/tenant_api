import { Request, Response } from "express";
import { IParamGeneral } from "../interfaces/parameter.interface";
import { parameterService } from "../services/parameter.service";

export const createParamController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const body: IParamGeneral = req.body;

    const response = await parameterService.createParameter(body);

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Error" });
  }
};

export const getParamController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id;

    const response = await parameterService.getParameterById(id);

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Error" });
  }
};

export const updateParamController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id;
    const body: Partial<IParamGeneral> = req.body;

    const response = await parameterService.updateParameter(id, body);

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Error" });
  }
};
