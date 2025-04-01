/*
  Warnings:

  - You are about to drop the `parameter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "parameter";

-- CreateTable
CREATE TABLE "global_parameters" (
    "id" TEXT NOT NULL,
    "porcCobranza" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "porcAbb" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "diasPlazoEmpresaAanmaning" INTEGER NOT NULL DEFAULT 0,
    "diasPlazoConsumidorAanmaning" INTEGER NOT NULL DEFAULT 0,
    "diasPlazoEmpresaSommatie" INTEGER NOT NULL DEFAULT 0,
    "diasPlazoConsumidorSommatie" INTEGER NOT NULL DEFAULT 0,
    "precioEmpresaPequena" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "contribucionEmpresaPequenaPfc" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "precioEmpresaGrande" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "contribucionEmpresaGrandePfc" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "global_parameters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenant_config" (
    "tenantId" TEXT NOT NULL,
    "parameterId" TEXT NOT NULL,
    "porcInteresCobranza" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "tenant_config_tenantId_parameterId_key" ON "tenant_config"("tenantId", "parameterId");

-- AddForeignKey
ALTER TABLE "tenant_config" ADD CONSTRAINT "tenant_config_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tenant_config" ADD CONSTRAINT "tenant_config_parameterId_fkey" FOREIGN KEY ("parameterId") REFERENCES "global_parameters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
