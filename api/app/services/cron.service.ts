import { COLLECTION_STATUS } from "../../../api/common/lib/constant";
import { prisma } from "../../index";
import { parameterService } from "../services/parameter.service";
import { notificationService } from "./Notification.service";

class CronService {
    /**
     * Busca todas las facturas con collectionStatus "aanmaning" y env�a una segunda notificaci�n si no est�n pagadas.
     */
    async sendSecondNotificationForUnpaidInvoices(colectionStatus: string) {
        // Implementaci�n existente
        const PARAMETER_ID = process.env.PARAMETER_ID || "";
        const _parameter = await parameterService.getParameterById(PARAMETER_ID);
        // CONSUMIDORES
        const DIAS_PLAZO_CONSUMIDOR_AANMANING = _parameter?.diasPlazoConsumidorAanmaning || 0;
        const DIAS_PLAZO_CONSUMIDOR_SOMMATIE = _parameter?.diasPlazoConsumidorSommatie || 0;
        // EMPRESAS
        const DIAS_PLAZO_EMPRESA_AANMANING = _parameter?.diasPlazoEmpresaAanmaning || 0;
        const DIAS_PLAZO_EMPRESA_SOMMATIE = _parameter?.diasPlazoEmpresaSommatie || 0;


        const invoices = await this.findInvoicesByCollectionStatusesAndReceivableStatus(colectionStatus, "pending");

        for (const invoice of invoices) {
            const { debtor, collectionStatus } = invoice;

            // Asegúrate de que createdAt sea un objeto Date
            const createdAt = invoice.createdAt instanceof Date
                ? invoice.createdAt
                : new Date(invoice.createdAt);

            // 

            // CAMBIO DE ESTADO DE LA FACTURA
            if (collectionStatus === COLLECTION_STATUS.AANMANING) {

                if (debtor?.personType === "individual") {
                    const _diasPlazo = new Date(Date.now() - DIAS_PLAZO_CONSUMIDOR_SOMMATIE * 24 * 60 * 60 * 1000)
                    console.log("Dias de plazo consumidor sommatie", _diasPlazo);
                    if (createdAt < _diasPlazo) {
                        console.log("CAMBIO DE ESTADO A SOMMATIE");
                        await this.changeCollectionStatus(invoice.id, COLLECTION_STATUS.SOMMATIE);
                    }
                }

                if (debtor?.personType === "company") {
                    const _diasPlazo = new Date(Date.now() - DIAS_PLAZO_EMPRESA_SOMMATIE * 24 * 60 * 60 * 1000)
                    console.log("Dias de plazo empresa sommatie", _diasPlazo);
                    if (createdAt < _diasPlazo) {
                        console.log("CAMBIO DE ESTADO A SOMMATIE");
                        await this.changeCollectionStatus(invoice.id, COLLECTION_STATUS.SOMMATIE);
                    }
                }
            }
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
        collectionStatus: string,
        receivableStatus: string
    ) {
        return await prisma.accountsReceivable.findMany({
            where: {
                collectionStatus,
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