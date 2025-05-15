/*
  Warnings:

  - You are about to drop the column `amount` on the `installment` table. All the data in the column will be lost.
  - Added the required column `originalAmount` to the `installment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "installment" DROP COLUMN "amount",
ADD COLUMN     "amountPaid" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "originalAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "remainingAmount" DOUBLE PRECISION NOT NULL DEFAULT 0;
