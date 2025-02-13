import { NextFunction, Request, Response } from "express";
import { AxiosError } from "axios";
import { ZodError } from "zod";
export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}


export const errorHandler = (
  err: Error | AxiosError | any, // Aseguramos que AxiosError esté incluido
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Manejo de AppError
  if (err instanceof AppError) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }

  // Manejo de ZodError
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Validation Error",
      errors: err.flatten().fieldErrors,
    });
  }

  // Manejo de AxiosError (errores de red)
  if (err.isAxiosError) {
    console.error("AxiosError:", err.message);
    return res.status(500).json({
      message: "Network Error",
      details: err.message, // Opcional: podrías agregar detalles del error Axios
    });
  }

  // Otros errores genéricos (pueden ser de otros tipos que no hemos manejado explícitamente)
  if (err instanceof Error) {
    console.error("Generic Error:", err.stack);
    return res.status(500).json({
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // En producción no mostramos la pila
    });
  }

  // Si es un error desconocido
  console.error("Unknown Error:", err);
  return res.status(500).json({ message: "Internal Server Error" });
};
