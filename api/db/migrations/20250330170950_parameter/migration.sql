-- CreateTable
CREATE TABLE "parameter" (
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
    "porcInteresCobranza" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "parameter_pkey" PRIMARY KEY ("id")
);
