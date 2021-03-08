import { ApolloServer } from 'apollo-server-micro';
import { getSession } from '@auth0/nextjs-auth0';
import 'graphql-import-node';
import * as Query from './schemas/Query.gql';
import * as GithubUser from './schemas/GithubUser.gql';
import { resolvers } from './resolvers';

const apolloServer = new ApolloServer({
  typeDefs: [Query, GithubUser],
  resolvers,
  context: ({ req, res }) => {
    const session = getSession(req, res);

    return { user: session?.user || undefined };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
