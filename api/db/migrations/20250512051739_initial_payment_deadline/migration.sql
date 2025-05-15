/*
  Warnings:

  - You are about to drop the column `agreementExpirationDate` on the `payment_agreement` table. All the data in the column will be lost.
  - Added the required column `initialPaymentDeadline` to the `payment_agreement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment_agreement" DROP COLUMN "agreementExpirationDate",
ADD COLUMN     "initialPaymentDeadline" TIMESTAMP(3) NOT NULL;
