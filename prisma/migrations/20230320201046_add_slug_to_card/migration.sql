/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `card` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "card" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "card_slug_key" ON "card"("slug");
