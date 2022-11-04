import { createServer } from "@graphql-yoga/node";

import { schema } from "./schema";

const port = Number(process.env.PORT) || 4000;
const server = createServer({ port, schema });

server.start();
