/*
  Warnings:

  - You are about to alter the column `type` on the `news` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE "news" ALTER COLUMN "type" SET DATA TYPE VARCHAR(30);
