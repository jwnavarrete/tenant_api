import { z } from "zod";
import { DebtorSchema } from "./debtor.schemas";

const InvoiceSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string(),
  invoiceNumber: z.string(),
  issueDate: z
    .union([z.string(), z.date()])
    .transform((date) => (date instanceof Date ? date.toISOString() : date)),
  dueDate: z
    .union([z.string(), z.date()])
    .transform((date) => (date instanceof Date ? date.toISOString() : date)),
  customerName: z.string(),
  customerAddress: z.string(),
  customerEmail: z.string().email(),
  customerPhone: z.string(),
  invoiceAmount: z.number().min(0),
  amountPaid: z.number().min(0).default(0),
  outstandingBalance: z.number().min(0).default(0),
  receivableStatus: z.enum(["paid", "pending", "overdue"]),
  collectionStatus: z
    .enum(["initial", "aanmaning", "sommatie", "ingebrekestelling"])
    .optional()
    .transform((val) => (val ? val.toLowerCase() : val)),
  notes: z.string().optional(),
  collectionPercentage: z.number().min(0).default(0),
  abbPercentage: z.number().min(0).default(0),
  debtorId: z.string().optional(),
  createdAt: z
    .union([z.string(), z.date()])
    .transform((date) => (date instanceof Date ? date.toISOString() : date)),
  updatedAt: z
    .union([z.string(), z.date()])
    .transform((date) => (date instanceof Date ? date.toISOString() : date)),
});

const ExcelImportSchema = z.object({
  debtorFullname: z.string(),
  debtorEmail: z.string().email(),
  debtorPhone: z.string(),
  debtorAddress: z.string(),
  invoiceNumber: z.string(),
  invoiceAmount: z.number().min(0),
  issueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  identification: z.string(),
});

const ExcelImportSchemaArray = z.array(ExcelImportSchema);

const PaymentDetailSchema = z.object({
  id: z.string().uuid(),
  accountsReceivableId: z.string(),
  paymentDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  paymentAmount: z.number().min(0),
  paymentMethod: z.string(),
  paymentType: z.string(),
  referenceNumber: z.string().optional(),
  notes: z.string().optional(),
  createdAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  updatedAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
});

const InvoiceResponseSchema = InvoiceSchema.extend({
  debtor: DebtorSchema.optional(),
  paymentDetail: z.array(PaymentDetailSchema).optional(),
});

export {
  ExcelImportSchema,
  ExcelImportSchemaArray,
  InvoiceSchema,
  InvoiceResponseSchema,
};
