import { z } from "zod";

const InvoiceNotificationSchema = z.object({
  sendDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }), // Fecha de envío
  invoiceNumber: z.string(), // Número de factura
  invoiceAmount: z.number().min(0), // Monto de la factura
  urlRegister: z.string(), // URL para registro
  days: z.number().min(0), // Días para el pago
  accountNumber: z.string(), // Número de cuenta bancaria
  collectionPercentage: z.number().min(0).max(100), // Porcentaje de cobranza
  calculatedCollection: z.number().min(0), // Monto calculado de cobranza
  abbPercentage: z.number().min(0).max(100), // Porcentaje de ABB
  calculatedABB: z.number().min(0), // Monto calculado de ABB
  totalAmount: z.number().min(0), // Monto total
  fine: z.number().min(0), // Multa por retraso
  validDays: z.number().min(0), // Días de validez del código de acceso
  temporaryAccessCode: z.string(), // Código de acceso temporal
});

export { InvoiceNotificationSchema };
