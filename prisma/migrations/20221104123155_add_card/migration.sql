-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "power" INTEGER NOT NULL,
    "ability" TEXT NOT NULL,
    "trigger" TEXT,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
