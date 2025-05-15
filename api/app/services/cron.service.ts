import { COLLECTION_STATUS } from "../../../api/common/lib/constant";
import { prisma } from "../../index";
import { notificationService } from "./Notification.service";

class CronService {
    /**
     * Busca todas las facturas con collectionStatus "aanmaning" y env�a una segunda notificaci�n si no est�n pagadas.
     */
    async sendSecondNotificationForUnpaidInvoices() {
        // Implementaci�n existente

        const collectionStatuses = ["aanmaning", "sommatie"];
        const invoices = await this.findInvoicesByCollectionStatusesAndReceivableStatus(collectionStatuses, "pending");

        for (const invoice of invoices) {
            const { debtor, collectionStatus } = invoice;

            // CAMBIO DE ESTADO DE LA FACTURA
            if (collectionStatus === COLLECTION_STATUS.AANMANING) {
                // invoice.paymentDetail
                await this.changeCollectionStatus(invoice.id, COLLECTION_STATUS.SOMMATIE);
            }

            if (collectionStatus === COLLECTION_STATUS.SOMMATIE) {
                await this.changeCollectionStatus(invoice.id, COLLECTION_STATUS.INGEBREKESTELLING);
            }

            await notificationService.sendNotification(invoice.tenantId, invoice.id)
        }
    }


    async changeCollectionStatus(id: string, status: string) {
        await prisma.accountsReceivable.updateMany({
            where: {
                id: id,
            },
            data: {
                collectionStatus: status,
            },
        });
    }

    /**
     * Busca facturas por un estado de colecci�n espec�fico.
     * @param collectionStatus Estado de colecci�n a buscar.
     * @param receivableStatus Estado de la factura a excluir (opcional).
     */
    private async findInvoicesByCollectionStatusesAndReceivableStatus(
        collectionStatuses: string[],
        receivableStatus: string
    ) {
        return await prisma.accountsReceivable.findMany({
            where: {
                collectionStatus: { in: collectionStatuses },
                receivableStatus,
            },
            include: {
                debtor: true,
                paymentDetail: true,
                paymentAgreement: {
                    include: {
                        Installments: true,
                    },
                },
            },
        });
    }


}

export const cronService = new CronService();