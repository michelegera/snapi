/*
  Warnings:

  - Added the required column `cost` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ability` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `difficulty` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rarity` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "abilities" TEXT[],
ADD COLUMN     "cost" INTEGER NOT NULL,
ADD COLUMN     "power" INTEGER NOT NULL,
ADD COLUMN     "source" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "ability" TEXT NOT NULL,
ADD COLUMN     "difficulty" TEXT NOT NULL,
ADD COLUMN     "rarity" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
