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
  for (const card of cards) {
    await prisma.card.create({
      data: card,
    });
  }
  console.log('Cards seeded successfully');
}

// Function to seed locations data
async function seedLocations() {
  const locations = loadSeedData('locations');
  for (const location of locations) {
    await prisma.location.create({
      data: location,
    });
  }
  console.log('Locations seeded successfully');
}

// Function to run seeding
async function seed() {
  try {
    // Clear existing data (optional)
    await prisma.card.deleteMany();
    await prisma.location.deleteMany();

    // Seed cards and locations
    await seedCards();
    await seedLocations();
  } catch (error) {
    console.error('Error seeding the database: ', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Check command-line arguments to run specific seed functions
const [, , command] = process.argv;
if (command === 'cards') {
  seedCards();
} else if (command === 'locations') {
  seedLocations();
} else {
  seed(); // Seed both if no command is passed
}
