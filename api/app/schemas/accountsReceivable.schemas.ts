import { z } from "zod";

const InvoiceSchema = z.object({
  invoiceNumber: z.string(),
  issueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  customerName: z.string(),
  customerAddress: z.string(),
  customerEmail: z.string().email(),
  customerPhone: z.string(),
  invoiceAmount: z.number().min(0),
  amountPaid: z.number().min(0),
  outstandingBalance: z.number().min(0),
  invoiceStatus: z.enum(["paid", "pending", "overdue"]),  
  collectionStatus: z.enum(["initial", "aanmaning", "sommatie", "ingebrekestelling"]).optional(),
  notes: z.string().optional(),
});

export { InvoiceSchema };