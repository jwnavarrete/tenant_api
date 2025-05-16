import { NotificationType } from "../../../api/db/generated";
import { COLLECTION_STATUS } from "../../../api/common/lib/constant";
import { prisma } from "../../index";
import { parameterService } from "../services/parameter.service";
import { notificationService } from "./Notification.service";
// Removed unused notificationService import


const NOTIFICATION_FLOW = [
    "INITIAL",
    "AANMANING",
    "SOMMATIE",
    "INGEBREKESTELLING",
    "BLOKKADE",
];

class CronService {

    async processNotifications() {
        const PARAMETER_ID = process.env.PARAMETER_ID || "";
        const _parameter = await parameterService.getParameterById(PARAMETER_ID);

        const invoices = await this.findInvoicesByReceivableStatus("pending");
        console.log("invoices", invoices);

        for (const invoice of invoices) {
            const { id, debtor } = invoice;
            const personType = debtor?.personType;

            const lastNotification = await this.getLastNotification(id);
            const lastStatus = lastNotification?.type || COLLECTION_STATUS.INITIAL;
            const currentIndex = NOTIFICATION_FLOW.indexOf(lastStatus.toUpperCase());
            const nextStatus = NOTIFICATION_FLOW[currentIndex + 1];

            console.log(`currentIndex: ${currentIndex}`);
            console.log(`nextStatus: ${nextStatus}`);
            console.log(`lastStatus: ${lastStatus}`);
            console.log(`personType: ${personType}`);
            // Ya no hay siguiente notificación
            if (currentIndex === -1 || !nextStatus) continue;

            const diasPlazo = this.getPlazoPorTipoYEstado(
                personType as string,
                lastStatus,
                _parameter
            );

            console.log(`diasPlazo: ${diasPlazo}`);
            const fechaUltimoEnvio = lastNotification?.sentAt || invoice.createdAt;

            const fechaLimite = new Date(fechaUltimoEnvio);
            fechaLimite.setDate(fechaLimite.getDate() + diasPlazo);

            const formattedFechaLimite = `${fechaLimite.getDate().toString().padStart(2, '0')}/${(fechaLimite.getMonth() + 1).toString().padStart(2, '0')}/${fechaLimite.getFullYear()}`;
            console.log(`fechaLimite: ${formattedFechaLimite}`);

            if (new Date() >= fechaLimite) {
                console.log(`📨 Enviando notificación para factura ${id}: ${nextStatus}`);
                await this.sendNotification(invoice.id, nextStatus as NotificationType);
                await this.changeCollectionStatus(id, nextStatus.toLowerCase());
            }
        }

        // Enviar notificaciones pendientes
        console.log("Enviando notificaciones pendientes...");
        await this.sendPendingNotifications();
    }

    private async findInvoicesByReceivableStatus(receivableStatus: string) {
        const ListStatus = [
            "initial",
            "aanmaning",
            "sommatie",
            "ingebrekestelling",
        ];

        return await prisma.accountsReceivable.findMany({
            where: {
                receivableStatus,
                collectionStatus: { in: ListStatus },
            },
            include: {
                debtor: true,
                paymentDetail: true,
                paymentAgreement: { include: { Installments: true } },
            },
            take: 500, // Limit the number of results to 200
        });
    }

    private async getLastNotification(invoiceId: string) {
        return await prisma.notificationCollection.findFirst({
            where: { accountsReceivableId: invoiceId },
            orderBy: { sentAt: "desc" },
        });
    }

    private getPlazoPorTipoYEstado(
        personType: string,
        lastStatus: string,
        param: any
    ): number {
        // 
        if (personType === "individual") {
            if (lastStatus === "AANMANING")
                return param?.diasPlazoConsumidorAanmaning || 0;
            if (lastStatus === "SOMMATIE")
                return param?.diasPlazoConsumidorSommatie || 0;            
        } else {
            if (lastStatus === "AANMANING")
                return param?.AanmaningdiasPlazoEmpresaSommatie || 0;
            if (lastStatus === "SOMMATIE")
                return param?.diasPlazoEmpresaSommatie || 0;

        }
        return 0;
    }



    private async sendNotification(invoiceId: string, type: NotificationType) {

        await prisma.notificationCollection.create({
            data: {
                accountsReceivableId: invoiceId,
                type: type, // Ensure type is passed as a string
                sentAt: new Date(),
                status: "PENDING", // Replace with the appropriate default status
                channel: "EMAIL", // Replace with the appropriate default channel
            },
        });

        // Aquí puedes llamar a notificationService.sendEmail() si aplica
        console.log(`✔️ Notificación creada: ${type} para factura ${invoiceId}`);
    }

    private async changeCollectionStatus(id: string, status: string) {
        await prisma.accountsReceivable.update({
            where: { id },
            data: { collectionStatus: status },
        });
        console.log(`🔄 Estado actualizado a ${status} para factura ${id}`);
    }


    async sendPendingNotifications() {

        const pendingNotifications = await prisma.notificationCollection.findMany({
            where: { status: "PENDING" },
            include: {
                accountsReceivable: {
                    include: {
                        tenant: true,
                    },
                },
            },
            take: 200, // Limit the number of results to 200
        });

        console.log("pendingNotifications", pendingNotifications.length);
        for (const notification of pendingNotifications) {
            try {
                const tenantId = notification.accountsReceivable.tenant.id;
                const invoiceId = notification.accountsReceivable.id || "";

                // Aquí puedes llamar a notificationService.sendEmail() si aplica

                const response = await notificationService.sendNotification(
                    tenantId,
                    invoiceId,
                    notification.type
                );

                console.log("response", response);

                await prisma.notificationCollection.update({
                    where: { id: notification.id },
                    data: { status: "SENT", message: response, responseStatus: "OK" },
                });

                console.log(`✔️ Notificación enviada: ${notification.type} para factura ${notification.accountsReceivableId}`);
            } catch (error) {
                console.error(`❌ Error al enviar notificación ${notification.id}:`, error);
            }
        }
    }
}

export const cronService = new CronService();
