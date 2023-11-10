/*
  Warnings:

  - A unique constraint covering the columns `[army_number]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_army_number_key" ON "user"("army_number" DESC);
