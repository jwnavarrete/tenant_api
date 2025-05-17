-- AlterTable
ALTER TABLE "accounts_receivable" ADD COLUMN     "abbPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "collectionPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0;
