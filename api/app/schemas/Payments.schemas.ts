import { z } from "zod";

export const PaymentApplicationSchema = z.object({
  paymentDetailId: z.string(),
  accountsReceivableId: z.string(),
  amountApplied: z.number(),
  appliedTo: z.enum([
    "CAPITAL",
    "INTEREST",
    "TAX",
    "CLIENT_COLLECTION_FEE",
    "CLIENT_ABB_FEE",
    "ADMIN_COLLECTION_FEE",
    "ADMIN_ABB_FEE"
  ]),
});

export const RegisterPaymentAgreementSchema = z.object({
  initialPayment: z.number().min(0),
  initialPaymentDeadline: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  installments: z.number().int().min(1),
  installmentsDetail: z.array(
    z.object({
      installmentNumber: z.number().int().min(1),
      amount: z.string().refine((value) => !isNaN(parseFloat(value)), {
        message: "Amount must be a valid number",
      }),
      dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
      }),
    })
  ),
  frequency: z.enum(["mensual", "quincenal", "semanal", "diario"]),
  invoiceId: z.string(),
  totalAmount: z.number().min(0),
});

export const RegisterPaymentSchema = z.object({
  invoiceId: z.string(),
  paymentAmount: z.number().min(0),
  paymentMethod: z.string(),
  referenceNumber: z.string(),
  notes: z.string().optional(),
  installmentIds: z.array(z.string()).optional(), // Optional, if not present, payment goes to the total
  initialPaymentStatus: z.string().nullable().optional(), // Optional
  initialPayment: z.number().nullable().optional(), // Optional
});


