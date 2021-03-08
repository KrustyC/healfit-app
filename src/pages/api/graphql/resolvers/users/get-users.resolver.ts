/* eslint-disable camelcase */
import axios from 'axios';
import { GithubUser, QueryResolvers } from 'types-generated/graphql';

export const getUsers: QueryResolvers['getUsers'] = async (_, __, ctx) => {
  const { user } = ctx;

  if (!user) {
    return [];
  }

  const users = await axios.get<GithubUser[]>('https://api.github.com/users');

  return users.data.map(({ id, login, avatar_url }) => ({
    id,
    login,
    avatar_url,
  }));
};
