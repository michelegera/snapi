import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define your GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
    allCards: [Card]
    allLocations: [Location]
  }

  type Card {
    id: Int
    name: String
  }

  type Location {
    id: Int
    name: String
  }
`;

// Define resolvers using Prisma
const resolvers = {
  Query: {
    // Query all Cards from the database
    allCards: async () => {
      return await prisma.card.findMany();
    },
    // Query all Locations from the database
    allLocations: async () => {
      return await prisma.location.findMany();
    },
  },
};

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server is running at ${url}`);
