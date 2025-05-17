/*
  Warnings:

  - A unique constraint covering the columns `[tenantId,identification]` on the table `debtors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "debtors_tenantId_identification_key" ON "debtors"("tenantId", "identification");
