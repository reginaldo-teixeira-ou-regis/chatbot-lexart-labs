/*
  Warnings:

  - The `conversation` column on the `HistoryConversation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "HistoryConversation_userId_key";

-- AlterTable
ALTER TABLE "HistoryConversation" DROP COLUMN "conversation",
ADD COLUMN     "conversation" JSONB[];
