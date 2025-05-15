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
  customerAddress: z.string().optional(),
  customerEmail: z.string().email().optional(),
  customerPhone: z.string().optional(),
  invoiceAmount: z.number().min(0),
  amountPaid: z.number().min(0).default(0),
  remainingBalance: z.number().min(0).default(0),
  totalDueToday: z.number().min(0).default(0),
  receivableStatus: z.enum(["paid", "pending", "overdue"]),
  collectionStatus: z
    .enum(["initial", "aanmaning", "sommatie", "ingebrekestelling"])
    .optional()
    .transform((val) => (val ? val.toLowerCase() : val)),
  clientCollectionPercentage: z.number().min(0).default(0),
  clientCollectionAmount: z.number().min(0).default(0),
  clientAbbPercentage: z.number().min(0).default(0),
  clientAbbAmount: z.number().min(0).default(0),
  adminCollectionPercentage: z.number().min(0).default(0),
  adminCollectionAmount: z.number().min(0).default(0),
  adminAbbPercentage: z.number().min(0).default(0),
  adminAbbAmount: z.number().min(0).default(0),
  notifiedAt: z
    .union([z.string(), z.date()])
    .nullable()
    .transform((date) => (date instanceof Date ? date.toISOString() : date || null)),
  previousInterestAmount: z.number().min(0).nullable(),
  interestStartDate: z
    .union([z.string(), z.date()])
    .nullable()
    .transform((date) => (date instanceof Date ? date.toISOString() : date || null)),
  interestFrozenAt: z
    .union([z.string(), z.date()])
    .nullable()
    .transform((date) => (date instanceof Date ? date.toISOString() : date || null)),
  interestFrozenAmount: z.number().min(0).nullable(),
  interestFrozenPercentage: z.number().min(0).nullable(),
  lastPaymentDate: z
    .union([z.string(), z.date()])
    .nullable()
    .transform((date) => (date instanceof Date ? date.toISOString() : date || null)),
  debtorId: z.string().optional(),
  createdAt: z
    .union([z.string(), z.date()])
    .transform((date) => (date instanceof Date ? date.toISOString() : date)),
  updatedAt: z
    .union([z.string(), z.date()])
    .transform((date) => (date instanceof Date ? date.toISOString() : date)),
  hasPaymentAgreement: z.boolean().default(false),
  paymentAgreementId: z.string().nullable().optional(),
  notes: z.string().optional(),
});

const ExcelImportSchema = z.object({
  debtorId: z.string().optional(),
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
