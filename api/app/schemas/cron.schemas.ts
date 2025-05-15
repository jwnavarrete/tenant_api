import { z } from 'zod';

// Schema for validating a single invoice
const InvoiceSchema = z.object({
    id: z.string().uuid(),
    amount: z.number().positive(),
    dueDate: z.string().datetime(),
    status: z.enum(['pending', 'paid', 'overdue']),
    customerEmail: z.string().email(),
});

// Schema for validating the request to process all pending invoices
const ProcessPendingInvoicesSchema = z.object({
    invoices: z.array(InvoiceSchema),
    notificationType: z.enum(['email', 'sms', 'push']),
    sendNotifications: z.boolean(),
});

// Export schemas
export { InvoiceSchema, ProcessPendingInvoicesSchema };