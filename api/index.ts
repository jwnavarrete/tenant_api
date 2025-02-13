import app from "./app";
import "module-alias/register";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({ log: ["query"] });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});