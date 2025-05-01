/*
  Warnings:

  - The values [COLLECTION_FEE,ABB_FEE] on the enum `PaymentApplicationType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PaymentApplicationType_new" AS ENUM ('CAPITAL', 'INTEREST', 'TAX', 'CLIENT_COLLECTION_FEE', 'CLIENT_ABB_FEE', 'ADMIN_COLLECTION_FEE', 'ADMIN_ABB_FEE');
ALTER TABLE "payment_application" ALTER COLUMN "appliedTo" TYPE "PaymentApplicationType_new" USING ("appliedTo"::text::"PaymentApplicationType_new");
ALTER TYPE "PaymentApplicationType" RENAME TO "PaymentApplicationType_old";
ALTER TYPE "PaymentApplicationType_new" RENAME TO "PaymentApplicationType";
DROP TYPE "PaymentApplicationType_old";
COMMIT;
