import { QueryResolvers } from 'types-generated/graphql';
import { getUser, getUsers } from './users';

const Query: Partial<QueryResolvers> = {
  getUser,
  getUsers,
};

export const resolvers = {
  Query,
};
