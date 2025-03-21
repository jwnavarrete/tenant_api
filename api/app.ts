import "express-async-errors";
import express, { Application, Request, Response, NextFunction } from "express";
import { errorHandler } from "./errors";
import cors from "cors";
import * as securityRoutes from "./modules/security/routers";
import { corsOptions } from "./cors";

const app: Application = express();

app.use((req: Request, _res: Response, next: NextFunction) => {
  next();  
});

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/auth/", securityRoutes.authRoutes);
app.use("/tenant", securityRoutes.tenantRoutes);
app.use("/reset-password", securityRoutes.resetPassword);

app.use(errorHandler);

export default app;
