"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.AppError = void 0;
const zod_1 = require("zod");
class AppError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
const errorHandler = (err, // Aseguramos que AxiosError esté incluido
req, res, next) => {
    // Manejo de AppError
    if (err instanceof AppError) {
        return res.status(err.statusCode || 500).json({ message: err.message });
    }
    // Manejo de ZodError
    if (err instanceof zod_1.ZodError) {
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
exports.errorHandler = errorHandler;
