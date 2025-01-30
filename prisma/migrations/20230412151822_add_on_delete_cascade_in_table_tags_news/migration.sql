-- DropForeignKey
ALTER TABLE "tags_news" DROP CONSTRAINT "tags_news_newsId_fkey";

-- DropForeignKey
ALTER TABLE "tags_news" DROP CONSTRAINT "tags_news_tagId_fkey";

-- AddForeignKey
ALTER TABLE "tags_news" ADD CONSTRAINT "tags_news_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "news"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags_news" ADD CONSTRAINT "tags_news_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
