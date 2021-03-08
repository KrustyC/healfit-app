/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import { GithubUser } from './graphql';

export const aGithubUser = (overrides?: Partial<GithubUser>): GithubUser => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'ipsum',
        login: overrides && overrides.hasOwnProperty('login') ? overrides.login! : 'neque',
        avatar_url: overrides && overrides.hasOwnProperty('avatar_url') ? overrides.avatar_url! : 'dolor',
    };
};
