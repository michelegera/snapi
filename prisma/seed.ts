import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Delete all cards
  await prisma.card.deleteMany({});

  // Create some cards
  await prisma.card.create({
    data: {
      name: "Jessica Jones",
      type: "character",
      cost: 4,
      power: 4,
      ability: "If you don’t play a card here next turn, +4 Power.",
      trigger: "on_reveal",
    },
  });
  await prisma.card.create({
    data: {
      name: "Mister Fantastic",
      type: "character",
      cost: 3,
      power: 2,
      ability: "Adjacent locations have +2 Power.",
      trigger: "ongoing",
    },
  });
  await prisma.card.create({
    data: {
      name: "Nightcrawler",
      type: "character",
      cost: 1,
      power: 2,
      ability: "You can move this once.",
    },
  });
  await prisma.card.create({
    data: {
      name: "Odin",
      type: "character",
      cost: 6,
      power: 8,
      ability:
        "Activate the On Reveal ability of your other cards at this location.",
      trigger: "on_reveal",
    },
  });
  await prisma.card.create({
    data: {
      name: "Spectrum",
      type: "character",
      cost: 6,
      power: 5,
      ability: "Give your Ongoing cards +2 Power.",
      trigger: "on_reveal",
    },
  });
}

main();
