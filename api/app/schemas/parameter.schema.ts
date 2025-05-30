import { z } from "zod";

const paramGeneralSchema = z.object({
  // Porcentajes
  porcCobranza: z.number().min(0).max(100),
  porcAbb: z.number().min(0).max(100),

  // Plazos
  diasPlazoEmpresaAanmaning: z.number().min(0),
  diasPlazoConsumidorAanmaning: z.number().min(0),
  diasPlazoEmpresaSommatie: z.number().min(0),
  diasPlazoConsumidorSommatie: z.number().min(0),

  // Precios y contribuciones
  precioEmpresaPequena: z.number().min(0),
  contribucionEmpresaPequenaPfc: z.number().min(0),
  precioEmpresaGrande: z.number().min(0),
  contribucionEmpresaGrandePfc: z.number().min(0),

  // 📈 Multas - Aanmaning
  multaAanmaningEmpresa: z.number().min(0),
  multaAanmaningNatural: z.number().min(0),

  // 📈 Multas - Sommatie
  multaSommatieEmpresa: z.number().min(0),
  multaSommatieNatural: z.number().min(0),

  // ⏳ Límites de tiempo
  limiteDiasReaccionEmpresa: z.number().min(0),

  // 📉 Multas por no reaccionar
  multaNoReaccionEmpresa: z.number().min(0),
  multaNoReaccionNatural: z.number().min(0),

  // 📑 Multas - Acuerdo de Pago
  multaAcuerdoPagoEmpresa: z.number().min(0),
  multaAcuerdoPagoNatural: z.number().min(0),
});

export { paramGeneralSchema };
