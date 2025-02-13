export const corsOptions = {
  origin: (origin: string | undefined, callback: Function) => {
    // Permitir solicitudes desde "incassoapp" y cualquier subdominio de incassoapp
    const allowedOrigins = [
      /^https:\/\/incassoapp:\d+$/, // Permite "incassoapp" con cualquier puerto
      /^https:\/\/([a-z0-9-]+\.)?incassoapp:\d+$/, // Permite cualquier subdominio de "incassoapp" con cualquier puerto
      /^https:\/\/auth\.incassoapp:443$/, // Permite "auth.incassoapp:443"
      /^https:\/\/auth\.incassoapp:443\/$/, // Permite "auth.incassoapp:443/"
      /^https:\/\/incassoapp$/, // Permite "https://incassoapp"
      /^https:\/\/auth\.incassoapp$/, // Permite "https://auth.incassoapp"
      /^https:\/\/auth\.incassoapp\.test$/, // Permite "https://auth.incassoapp.test"
      /^https:\/\/([a-z0-9-]+\.)?incassoapp\.test$/, // Permite cualquier subdominio de "incassoapp.test"
      /^https:\/\/dazzsoft\.incassoapp\.test$/, // Permite "https://dazzsoft.incassoapp.test"
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
