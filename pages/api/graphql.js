// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { resolvers } from '../../graphql/resolvers';
import { typeDefs } from '../../graphql/typeDefs';
import { prisma } from '@/prisma/db';

//la dependencia @as-integrations/next de la cual utilizamos el handler
//startServerAndCreateNextHandler es necesario para poder integrar ApolloServer
//con el directorio api de Nextjs 
export const Context = {
  prisma: PrismaClient,
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

// main()

export default startServerAndCreateNextHandler(apolloServer, {
  context:async (req, res) => ({req ,res, prisma})
});

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }