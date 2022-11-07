-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "abilities" TEXT[],

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);
