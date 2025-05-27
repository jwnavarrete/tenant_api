-- CreateTable
CREATE TABLE "debtor_contributions" (
    "id" TEXT NOT NULL,
    "debtorId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "companyName" TEXT,
    "companyContact" TEXT,
    "companyEmail" TEXT,
    "companyPhone" TEXT,
    "extraInfo" TEXT,
    "verificationStatus" TEXT NOT NULL DEFAULT 'pending',
    "createdByUserId" TEXT,
    "notes" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "debtor_contributions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "debtor_contributions" ADD CONSTRAINT "debtor_contributions_debtorId_fkey" FOREIGN KEY ("debtorId") REFERENCES "debtors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "debtor_contributions" ADD CONSTRAINT "debtor_contributions_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "debtor_contributions" ADD CONSTRAINT "debtor_contributions_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
