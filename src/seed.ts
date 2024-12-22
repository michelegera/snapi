import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Function to load seed data from a JSON file
function loadSeedData(entityName: string) {
  const filePath = path.resolve(__dirname, '../seeds', `${entityName}.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// Function to seed cards data
async function seedCards() {
  const cards = loadSeedData('cards');

  try {
    await prisma.card.deleteMany();
    await prisma.card.createMany({ data: cards });
  } catch (error) {
    console.error('Error seeding cards: ', error);
  } finally {
    await prisma.$disconnect();
  }

  console.log('Cards seeded successfully');
}

// Function to seed locations data
async function seedLocations() {
  const locations = loadSeedData('locations');

  try {
    await prisma.location.deleteMany();
    await prisma.location.createMany({ data: locations });
  } catch (error) {
    console.error('Error seeding locations: ', error);
  } finally {
    await prisma.$disconnect();
  }

  console.log('Locations seeded successfully');
}

// Check command-line arguments to run specific seed functions
const [, , command] = process.argv;

if (command === 'cards') {
  seedCards();
} else if (command === 'locations') {
  seedLocations();
} else {
  // Seed both if no command is passed
  seedCards();
  seedLocations();
}
