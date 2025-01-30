/*
  Warnings:

  - You are about to alter the column `title` on the `news` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(80)`.
  - You are about to alter the column `subTitle` on the `news` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "news" ALTER COLUMN "title" SET DATA TYPE VARCHAR(80),
ALTER COLUMN "subTitle" SET DATA TYPE VARCHAR(200);
