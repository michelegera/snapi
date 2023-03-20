/*
  Warnings:

  - Added the required column `released` to the `location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "location" ADD COLUMN     "released" BOOLEAN NOT NULL;
