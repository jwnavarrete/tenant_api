/*
  Warnings:

  - You are about to drop the `comments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `message` to the `news_comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "news_comments" ADD COLUMN     "message" VARCHAR(200) NOT NULL;

-- DropTable
DROP TABLE "comments";
