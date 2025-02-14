import app from './app';
import 'dotenv/config';
import { PrismaClient } from "./db/generated";

// Inicializa Prisma (si lo necesitas)
export const prisma = new PrismaClient({ log: ["query"] });

// No uses `app.listen()` aquí. Vercel se encarga de manejarlo.
// export default app; // Exporta la aplicación para que Vercel maneje las solicitudes.

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;