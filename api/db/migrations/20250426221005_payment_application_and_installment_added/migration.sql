/*
  Warnings:

  - You are about to drop the column `paymentType` on the `payment_detail` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentApplicationType" AS ENUM ('CAPITAL', 'INTEREST', 'TAX', 'FEE');

-- AlterTable
ALTER TABLE "accounts_receivable" ADD COLUMN     "paymentAgreementId" TEXT;

-- AlterTable
ALTER TABLE "payment_detail" DROP COLUMN "paymentType",
ADD COLUMN     "paymentAgreementId" TEXT;

-- CreateTable
CREATE TABLE "payment_agreement" (
    "id" TEXT NOT NULL,
    "accountsReceivableId" TEXT NOT NULL,
    "initialPayment" DOUBLE PRECISION NOT NULL,
    "remainingBalance" DOUBLE PRECISION NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "numberOfInstallments" INTEGER NOT NULL,
    "installmentAmount" DOUBLE PRECISION NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "lastPaymentDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_agreement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "installment" (
    "id" TEXT NOT NULL,
    "paymentAgreementId" TEXT NOT NULL,
    "installmentNumber" INTEGER NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "installment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_application" (
    "id" TEXT NOT NULL,
    "paymentDetailId" TEXT NOT NULL,
    "accountsReceivableId" TEXT NOT NULL,
    "amountApplied" DOUBLE PRECISION NOT NULL,
    "appliedTo" "PaymentApplicationType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payment_agreement_accountsReceivableId_key" ON "payment_agreement"("accountsReceivableId");

-- AddForeignKey
ALTER TABLE "payment_agreement" ADD CONSTRAINT "payment_agreement_accountsReceivableId_fkey" FOREIGN KEY ("accountsReceivableId") REFERENCES "accounts_receivable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "installment" ADD CONSTRAINT "installment_paymentAgreementId_fkey" FOREIGN KEY ("paymentAgreementId") REFERENCES "payment_agreement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_detail" ADD CONSTRAINT "payment_detail_paymentAgreementId_fkey" FOREIGN KEY ("paymentAgreementId") REFERENCES "payment_agreement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_application" ADD CONSTRAINT "payment_application_paymentDetailId_fkey" FOREIGN KEY ("paymentDetailId") REFERENCES "payment_detail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
