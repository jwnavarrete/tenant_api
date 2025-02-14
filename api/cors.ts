export const corsOptions = {
  origin: (origin: string | undefined, callback: Function) => {
    // Permitir solicitudes desde "incassoapp" y cualquier subdominio de incassoapp
    const APP_DOMAIN = process.env.APP_DOMAIN || "incassoapp.com";
    
    const allowedOrigins = [
      // Permite https://incasso-app.vercel.app:<puerto>
      new RegExp(`^https://${APP_DOMAIN.replace('.', '\\.')}:\\d+$`),
      // Permite https://<subdominio>.incasso-app.vercel.app:<puerto>
      new RegExp(`^https://([a-z0-9-]+\\.)?${APP_DOMAIN.replace('.', '\\.')}:\\d+$`),
      // Permite https://auth.incasso-app.vercel.app:443
      new RegExp(`^https://auth\\.${APP_DOMAIN.replace('.', '\\.')}:443$`),
      // Permite https://auth.incasso-app.vercel.app:443/
      new RegExp(`^https://auth\\.${APP_DOMAIN.replace('.', '\\.')}:443/$`),
      // Permite https://incasso-app.vercel.app
      new RegExp(`^https://${APP_DOMAIN.replace('.', '\\.')}$`),
      // Permite https://auth.incasso-app.vercel.app
      new RegExp(`^https://auth\\.${APP_DOMAIN.replace('.', '\\.')}$`),
    ];

    const isValidOrigin = allowedOrigins.some((regex) =>
      origin ? regex.test(origin) : false
    );

    console.log("isValidOrigin:", isValidOrigin);

    if (isValidOrigin || !origin) {
      callback(null, true); // Permite la solicitud
    } else {
      console.log("Blocked by CORS");
      callback(new Error("Not allowed by CORS")); // Bloquea la solicitud si no es permitido
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false,
};
