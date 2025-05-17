/*
  Warnings:

  - Added the required column `paymentType` to the `payment_detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment_detail" ADD COLUMN     "paymentType" TEXT NOT NULL;
