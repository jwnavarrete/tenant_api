import "express-async-errors";
import express, { Application, Request, Response, NextFunction } from "express";
import { errorHandler } from "./errors";
import cors from "cors";
import * as appRoutes from "./app/routers";

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

app.use("/auth/", appRoutes.authRoutes);
app.use("/tenant", appRoutes.tenantRoutes);
app.use("/reset-password", appRoutes.resetPassword);
app.use("/users", appRoutes.userRoutes);
app.use("/parameters", appRoutes.parameterRoutes);
app.use("/parameters", appRoutes.tenantConfigRoutes);
app.use("/accounts-receivable", appRoutes.accountsReceivableRoutes);
app.use("/debtors", appRoutes.debtorRoutes);
app.use("/payments", appRoutes.paymentsRoutes);
app.use("/cron", appRoutes.cronRoutes);
app.use("/debtor-contribution", appRoutes.debtorContributionRoutes);

app.use(errorHandler);

export default app;