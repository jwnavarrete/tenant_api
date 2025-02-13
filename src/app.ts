import "express-async-errors";
import express, { Application, Request, Response, NextFunction } from "express";
import { errorHandler } from "./errors";
import cors from "cors";
import * as routers from "@/routers";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

import * as securityRoutes from "@/modules/security/routers";
import { corsOptions } from "./cors";

const app: Application = express();

// Middleware para registrar todas las solicitudes entrantes
app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Configura CORS para permitir solicitudes desde tu frontend de Next.js


app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/api-docs/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// SECURITY MODULES
app.use("/auth/", securityRoutes.authRoutes);
//
app.use("/users", routers.usersRoutes);
app.use("/news", routers.newsRoutes);
app.use("/tags", routers.tagsRoutes);
app.use("/comments", routers.commentsRoutes);
app.use("/clients", routers.clientsRoutes);

app.use("/tenant", securityRoutes.tenantRoutes);

app.use(errorHandler);

export default app;
