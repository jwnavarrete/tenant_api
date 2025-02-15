export const corsOptions = {
  origin: (origin: string | undefined, callback: Function) => {
    // El dominio base para la configuración de CORS
    const APP_DOMAIN = process.env.APP_DOMAIN || "incasso-app.com";
    
    // Permitir solicitudes desde el dominio y subdominios
    const allowedOrigins = [
      // Permite https://dominio.com
      new RegExp(`^https://${APP_DOMAIN.replace('.', '\\.')}$`),
      // Permite https://subdominio.dominio.com
      new RegExp(`^https://([a-z0-9-]+\\.)?${APP_DOMAIN.replace('.', '\\.')}$`),
    ];

    // Verifica si la solicitud proviene de un origen permitido
    const isValidOrigin = allowedOrigins.some((regex) =>
      origin ? regex.test(origin) : false
    );

    console.log("isValidOrigin:", isValidOrigin);

    // Si es un origen válido o no se especifica origen, permite la solicitud
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
