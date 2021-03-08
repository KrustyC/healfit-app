import axios from 'axios';
import { QueryResolvers, GithubUser } from 'types-generated/graphql';

export const getUser: QueryResolvers['getUser'] = async (_, args) => {
  const res = await axios.get<GithubUser>(`https://api.github.com/users/${args.name}`);

  return {
    id: res.data.id,
    login: res.data.login,
    avatar_url: res.data.avatar_url,
  };
};
