/*
  Warnings:

  - You are about to drop the column `abilities` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `card` table. All the data in the column will be lost.
  - Added the required column `ability` to the `card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "card" DROP COLUMN "abilities",
DROP COLUMN "description",
ADD COLUMN     "ability" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[];
