import "express-async-errors";
import express, { Application } from "express";
import { errorHandler } from "./errors";
import cors from "cors";
import * as routers from "@/routers";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api-docs/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/users', routers.usersRoutes)
app.use("/news", routers.newsRoutes);
app.use("/tags", routers.tagsRoutes);
app.use("/comments", routers.commentsRoutes);
app.use("/clients", routers.clientsRoutes);

app.use(errorHandler);

export default app;
