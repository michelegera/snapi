import { PrismaClient } from "@prisma/client";

// Cards
import starter from "./data/cards/starter-card.json";
import recruit from "./data/cards/recruit-season.json";
import pool1 from "./data/cards/pool-1.json";
import pool2 from "./data/cards/pool-2.json";
import pool3 from "./data/cards/pool-3.json";
import pool4 from "./data/cards/pool-4.json";
import pool5 from "./data/cards/pool-5.json";
import notAvailable from "./data/cards/not-available.json";

// Locations
import locations from "./data/locations/locations.json";

const prisma = new PrismaClient();

async function main() {
	// Seed Cards
	await prisma.card.deleteMany({});
	await Promise.all(
		[
			...starter,
			...recruit,
			...pool1,
			...pool2,
			...pool3,
			...pool4,
			...pool5,
			...notAvailable,
		].map((card) => {
			return prisma.card.create({
				data: card,
			});
		}),
	);

	// Seed Locations
	await prisma.location.deleteMany({});
	await Promise.all(
		locations.map((location) => {
			return prisma.location.create({
				data: location,
			});
		}),
	);
}

main();
