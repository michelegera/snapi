import { PrismaClient } from "@prisma/client";

import base from "./data/cards/base.json";
import pool1 from "./data/cards/pool_1.json";

const prisma = new PrismaClient();

async function main() {
  // Delete all cards
  await prisma.card.deleteMany({});

  // Create cards
  await Promise.all(
    [...base, ...pool1].map((card) => {
      return prisma.card.create({
        data: card,
      });
    })
  );
}

main();
