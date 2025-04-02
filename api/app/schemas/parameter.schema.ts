import { z } from "zod";

const paramGeneralSchema = z.object({
  porcCobranza: z.number().min(0).max(100),
  porcAbb: z.number().min(0).max(100),
  diasPlazoEmpresaAanmaning: z.number().min(0),
  diasPlazoConsumidorAanmaning: z.number().min(0),
  diasPlazoEmpresaSommatie: z.number().min(0),
  diasPlazoConsumidorSommatie: z.number().min(0),
  precioEmpresaPequena: z.number().min(0),
  contribucionEmpresaPequenaPfc: z.number().min(0),
  precioEmpresaGrande: z.number().min(0),
  contribucionEmpresaGrandePfc: z.number().min(0),
});

export { paramGeneralSchema };
