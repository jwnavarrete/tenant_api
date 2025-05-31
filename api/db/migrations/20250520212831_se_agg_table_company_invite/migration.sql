-- CreateEnum
CREATE TYPE "InvitationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'EXPIRED', 'CANCELLED');

-- CreateTable
CREATE TABLE "company_invitations" (
    "id" TEXT NOT NULL,
    "invitedEmail" TEXT NOT NULL,
    "invitedCompany" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "invitingCompanyId" TEXT NOT NULL,
    "invitationToken" TEXT NOT NULL,
    "status" "InvitationStatus" NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acceptedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "company_invitations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_invitations_invitationToken_key" ON "company_invitations"("invitationToken");

-- AddForeignKey
ALTER TABLE "company_invitations" ADD CONSTRAINT "company_invitations_invitingCompanyId_fkey" FOREIGN KEY ("invitingCompanyId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
