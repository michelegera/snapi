import { PrismaClient } from "@prisma/client";

// Cards
import starter from "./data/cards/starter.json";
import pool0 from "./data/cards/pool_0.json";
import pool1 from "./data/cards/pool_1.json";
import pool2 from "./data/cards/pool_2.json";

// Locations
import locations from "./data/locations/locations.json";

const prisma = new PrismaClient();

async function main() {
  // Seed Cards
  await prisma.card.deleteMany({});
  await Promise.all(
    [
      ...starter,
      ...pool0,
      ...pool1,
      ...pool2,
    ].map((card) => {
      return prisma.card.create({
        data: card,
      });
    })
  );

  // Seed Locations
  await prisma.location.deleteMany({});
  await Promise.all(
    locations.map((location) => {
      return prisma.location.create({
        data: location,
      });
    })
  );
}

main();
