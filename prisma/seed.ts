import { PrismaClient } from "@prisma/client";

import starter from "./data/cards/starter.json";
import pool0 from "./data/cards/pool_0.json";
import pool1 from "./data/cards/pool_1.json";

const prisma = new PrismaClient();

async function main() {
  // Delete all cards
  await prisma.card.deleteMany({});

  // Create cards
  await Promise.all(
    [...starter, ...pool0, ...pool1].map((card) => {
      return prisma.card.create({
        data: card,
      });
    })
  );
}

main();
