import { prisma } from "../../index";
import renderPDF from "../../common/PDF/renderPDF";

class ReportService {

    async getPaymentAgreementByInvoiceId(
        invoiceId: string
    ): Promise<any> {
        try {
            const paymentAgreement = await prisma.paymentAgreement.findUnique({
                where: { accountsReceivableId: invoiceId },
                include: {
                    accountsReceivable: {
                        include: {
                            debtor: true,
                            tenant: {
                                include: {
                                    client: true // Asegúrate que la relación company existe en tu modelo
                                }
                            }
                        }
                    },
                    Installments: true,
                    PaymentDetail: {
                        include: {
                            paymentApplications: true
                        }
                    }
                }
            });

            if (!paymentAgreement) {
                throw new Error(`Payment Agreement with invoice ID ${invoiceId} not found`);
            }

            return paymentAgreement;
        } catch (error) {
            console.error("Error fetching Payment Agreement:", error);
            throw new Error("Failed to fetch Payment Agreement");
        }
    }

    async PaymentAgreementReport(
        invoiceId: string
    ): Promise<string> {
        try {
            // 1. Obtener los datos de la base de datos
            const paymentAgreement = await this.getPaymentAgreementByInvoiceId(invoiceId);

            // Funciones utilitarias para formato
            const formatCurrency = (value: number) =>
                typeof value === "number" && !isNaN(value)
                    ? value.toLocaleString("en-US", { style: "currency", currency: "USD" })
                    : "";

            const formatDate = (date: Date | string) => {
                if (!date) return "";
                const d = typeof date === "string" ? new Date(date) : date;
                const day = String(d.getDate()).padStart(2, "0");
                const month = String(d.getMonth() + 1).padStart(2, "0");
                const year = d.getFullYear();
                return `${day}/${month}/${year}`;
            };

            // 2. Preparar los datos para el template, agregando formato
            const accountsReceivable = paymentAgreement.accountsReceivable;
            const formattedInstallments = paymentAgreement.Installments
                .slice()
                .sort((a: any, b: any) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                .map((inst: any, idx: number) => ({
                    ...inst,
                    number: idx + 1,
                    dueDateFormatted: formatDate(inst.dueDate),
                    originalAmountFormatted: formatCurrency(inst.originalAmount),
                    amountPaidFormatted: formatCurrency(inst.amountPaid),
                    remainingAmountFormatted: formatCurrency(inst.remainingAmount),
                }));

            const totalFees = accountsReceivable.clientCollectionAmount + accountsReceivable.clientAbbAmount
            const totalAmountWithFees = accountsReceivable.invoiceAmount + totalFees;
            const totalPaid = paymentAgreement.PaymentDetail.reduce((acc: number, detail: any) => {
                return acc + (detail.paymentAmount || 0);
            }, 0);

            const totalRemainingBalance = totalAmountWithFees - totalPaid;

            const templateData = {
                paymentAgreement: {
                    ...paymentAgreement,
                    totalAgreedAmountFormatted: formatCurrency(paymentAgreement.totalAgreedAmount),
                    initialPaymentFormatted: formatCurrency(paymentAgreement.initialPayment),
                    remainingBalanceFormatted: formatCurrency(paymentAgreement.remainingBalance),
                    accumulatedInterestFormatted: formatCurrency(paymentAgreement.accumulatedInterest),
                    totalPaidFormatted: formatCurrency(paymentAgreement.totalPaid),
                    initialPaymentDueDateFormatted: formatDate(paymentAgreement.initialPaymentDueDate),
                    initialPaymentDeadlineFormatted: formatDate(paymentAgreement.initialPaymentDeadline),
                    createdAtFormatted: formatDate(paymentAgreement.createdAt),
                    status: paymentAgreement.status,
                    installments: formattedInstallments,
                    PaymentDetail: paymentAgreement.PaymentDetail.map((detail: any) => ({
                        ...detail,
                        paymentAmountFormatted: formatCurrency(detail.paymentAmount),
                        paymentDateFormatted: formatDate(detail.paymentDate)
                    })),
                },
                client: accountsReceivable.tenant.client,
                accountsReceivable: {
                    ...accountsReceivable,
                    invoiceNumber: accountsReceivable.invoiceNumber,
                    amountPaidFormatted: formatCurrency(accountsReceivable.amountPaid),
                    remainingBalanceFormatted: formatCurrency(accountsReceivable.remainingBalance),
                    invoiceAmountFormatted: formatCurrency(accountsReceivable.invoiceAmount),
                    // Agregando los totales calculados
                    totalFeesFormatted: formatCurrency(totalFees),
                    totalAmountWithFeesFormatted: formatCurrency(totalAmountWithFees),
                    totalPaidFormatted: formatCurrency(totalPaid),
                    totalRemainingBalanceFormatted: formatCurrency(totalRemainingBalance),
                    // 
                    issueDateFormatted: formatDate(accountsReceivable.issueDate),
                    dueDateFormatted: formatDate(accountsReceivable.dueDate),
                    amountFormatted: formatCurrency(accountsReceivable.amount),
                    paidAmountFormatted: formatCurrency(accountsReceivable.paidAmount),
                    balanceFormatted: formatCurrency(accountsReceivable.balance),
                    status: accountsReceivable.status,
                    notes: accountsReceivable.notes,
                },
            };

            const templatePath = "reports/PaymentAgreement";
            const fileName = `PaymentAgreement_${invoiceId}`;
            // 3. Renderizar el PDF con los datos
            const pdfPath = await renderPDF(
                templatePath,
                fileName,
                templateData
            );

            console.log("demo:", templateData.paymentAgreement.paymentDetail);
            return "report create successfully";
        } catch (error) {
            console.error("Error sending Aanmaning:", error);
            throw new Error("Failed to send Aanmaning");
        }
    }
}

export const reportService = new ReportService();
