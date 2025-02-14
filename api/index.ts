import app from "./app";
import "dotenv/config";
import { PrismaClient } from "./db/generated";

export const prisma: PrismaClient = new PrismaClient({ log: ["query"] });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

module.exports = app;