/*
  Warnings:

  - You are about to drop the column `customerAddress` on the `accounts_receivable` table. All the data in the column will be lost.
  - You are about to drop the column `customerEmail` on the `accounts_receivable` table. All the data in the column will be lost.
  - You are about to drop the column `customerPhone` on the `accounts_receivable` table. All the data in the column will be lost.
  - You are about to drop the column `paymentAgreementId` on the `accounts_receivable` table. All the data in the column will be lost.
  - You are about to drop the column `accountsReceivableId` on the `payment_agreement` table. All the data in the column will be lost.
  - Added the required column `agreementExpirationDate` to the `payment_agreement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "payment_agreement" DROP CONSTRAINT "payment_agreement_accountsReceivableId_fkey";

-- DropIndex
DROP INDEX "payment_agreement_accountsReceivableId_key";

-- AlterTable
ALTER TABLE "accounts_receivable" DROP COLUMN "customerAddress",
DROP COLUMN "customerEmail",
DROP COLUMN "customerPhone",
DROP COLUMN "paymentAgreementId";

-- AlterTable
ALTER TABLE "installment" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "payment_agreement" DROP COLUMN "accountsReceivableId",
ADD COLUMN     "accumulatedInterest" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "agreementExpirationDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "initialPaymentStatus" TEXT NOT NULL DEFAULT 'pending',
ADD COLUMN     "isFullyPaid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "totalPaid" DOUBLE PRECISION NOT NULL DEFAULT 0;
