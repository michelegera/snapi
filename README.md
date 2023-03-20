# snapi

`snapi` is a GraphQL API for [Marvel Snap™][snap].

## Getting Started

```bash
# Install dependencies
npm install

# Set up env variables
cp .env.example .env # …and add a PostgreSQL connection string

# Initialize and seed the database
npx prisma migrate reset

# Start the server
npm run dev

# Open the GraphQL Playground
open http://localhost:4000/graphql
```

[snap]: https://www.marvelsnap.com/

## Development

If you change the schema, you’ll need to regenerate the Prisma client:

```bash
npx prisma migrate dev --name <migration-name>
npx prisma generate
```
