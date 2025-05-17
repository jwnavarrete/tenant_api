/*
  Warnings:

  - You are about to drop the column `abbPercentage` on the `accounts_receivable` table. All the data in the column will be lost.
  - You are about to drop the column `collectionPercentage` on the `accounts_receivable` table. All the data in the column will be lost.
  - You are about to drop the column `outstandingBalance` on the `accounts_receivable` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts_receivable" DROP COLUMN "abbPercentage",
DROP COLUMN "collectionPercentage",
DROP COLUMN "outstandingBalance",
ADD COLUMN     "adminAbbAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "adminAbbPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "adminCollectionAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "adminCollectionPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "clientAbbAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "clientAbbPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "clientCollectionAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "clientCollectionPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "hasPaymentAgreement" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "interestFrozenAmount" DOUBLE PRECISION,
ADD COLUMN     "interestFrozenAt" TIMESTAMP(3),
ADD COLUMN     "interestFrozenPercentage" DOUBLE PRECISION,
ADD COLUMN     "interestStartDate" TIMESTAMP(3),
ADD COLUMN     "lastPaymentDate" TIMESTAMP(3),
ADD COLUMN     "notifiedAt" TIMESTAMP(3),
ADD COLUMN     "remainingBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "totalDueToday" DOUBLE PRECISION NOT NULL DEFAULT 0;
