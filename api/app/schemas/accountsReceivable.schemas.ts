import { z } from "zod";

const InvoiceSchema = z.object({
  id: z.string().uuid(), // Identificador único del registro de cuentas por cobrar
  tenantId: z.string(), // Clave foránea que referencia a la tabla Tenant
  invoiceNumber: z.string(), // Número único de la factura asociada
  issueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }), // Fecha de emisión de la factura
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }), // Fecha de vencimiento de la factura
  customerName: z.string(), // Nombre del cliente
  customerAddress: z.string(), // Dirección del cliente
  customerEmail: z.string().email(), // Email del cliente
  customerPhone: z.string(), // Teléfono del cliente
  invoiceAmount: z.number().min(0), // Monto total de la factura
  amountPaid: z.number().min(0).default(0), // Monto pagado
  outstandingBalance: z.number().min(0).default(0), // Saldo pendiente
  receivableStatus: z.enum(["paid", "pending", "overdue"]), // Estado del registro
  collectionStatus: z
    .enum(["initial", "aanmaning", "sommatie", "ingebrekestelling"])
    .optional(), // Estado de cobranza
  notes: z.string().optional(), // Notas adicionales
  debtorId: z.string().optional(), // Clave foránea que referencia a la tabla Debtor
  createdAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }), // Fecha de creación
  updatedAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }), // Fecha de última actualización
});

const ExcelImportSchema = z.object({
  debtorFullname: z.string(), // Nombre del cliente
  debtorEmail: z.string().email(), // Email del cliente
  debtorPhone: z.string(), // Teléfono del cliente
  debtorAddress: z.string(), // Dirección del cliente
  invoiceNumber: z.string(), // Número de factura
  invoiceAmount: z.number().min(0), // Monto de la factura
  issueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }), // Fecha de emisión de la factura
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }), // Fecha de vencimiento de la factura
  identification: z.string(), // Identificación del deudor
});

const ExcelImportSchemaArray = z.array(ExcelImportSchema);

const NotificationSchema = z.object({
  sendDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }), // Fecha de envío
  invoiceNumber: z.string(), // Número de factura
  invoiceAmount: z.number().min(0), // Monto de la factura
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

export {
  ExcelImportSchema,
  ExcelImportSchemaArray,
  InvoiceSchema,
  NotificationSchema,
};
