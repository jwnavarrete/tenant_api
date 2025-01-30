/*
  Warnings:

  - You are about to alter the column `name` on the `tags` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.
  - A unique constraint covering the columns `[name]` on the table `tags` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "tags" ALTER COLUMN "name" SET DATA TYPE VARCHAR(30);

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");
