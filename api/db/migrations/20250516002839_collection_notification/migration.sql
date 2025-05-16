-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('AANMANING', 'SOMMATIE', 'INGEBREKESTELLING');

-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('SENT', 'FAILED', 'PENDING');

-- CreateEnum
CREATE TYPE "NotificationChannel" AS ENUM ('EMAIL', 'SMS', 'WHATSAPP');

-- CreateTable
CREATE TABLE "notification_collection" (
    "id" TEXT NOT NULL,
    "accountsReceivableId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "status" "NotificationStatus" NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL,
    "channel" "NotificationChannel" NOT NULL,
    "responseStatus" TEXT,
    "message" TEXT,
    "error" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_collection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notification_collection" ADD CONSTRAINT "notification_collection_accountsReceivableId_fkey" FOREIGN KEY ("accountsReceivableId") REFERENCES "accounts_receivable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
