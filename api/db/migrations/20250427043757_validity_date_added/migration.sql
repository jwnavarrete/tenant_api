/*
  Warnings:

  - You are about to drop the column `dueDate` on the `payment_agreement` table. All the data in the column will be lost.
  - You are about to drop the column `installmentAmount` on the `payment_agreement` table. All the data in the column will be lost.
  - Added the required column `validityDate` to the `payment_agreement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment_agreement" DROP COLUMN "dueDate",
DROP COLUMN "installmentAmount",
ADD COLUMN     "validityDate" TIMESTAMP(3) NOT NULL;
