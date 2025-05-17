/*
  Warnings:

  - A unique constraint covering the columns `[accountsReceivableId]` on the table `payment_agreement` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountsReceivableId` to the `payment_agreement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts_receivable" ADD COLUMN     "paymentAgreementId" TEXT;

-- AlterTable
ALTER TABLE "payment_agreement" ADD COLUMN     "accountsReceivableId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "payment_agreement_accountsReceivableId_key" ON "payment_agreement"("accountsReceivableId");

-- AddForeignKey
ALTER TABLE "payment_agreement" ADD CONSTRAINT "payment_agreement_accountsReceivableId_fkey" FOREIGN KEY ("accountsReceivableId") REFERENCES "accounts_receivable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_application" ADD CONSTRAINT "payment_application_accountsReceivableId_fkey" FOREIGN KEY ("accountsReceivableId") REFERENCES "accounts_receivable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
