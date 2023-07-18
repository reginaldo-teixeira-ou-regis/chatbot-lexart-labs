/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `HistoryConversation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HistoryConversation_userId_key" ON "HistoryConversation"("userId");
