import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient<NormalizedCacheObject>({
    ssrMode: true,
    link: new HttpLink({
      uri: process.env.graphqlEndpoint,
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState: Record<string, unknown> = null
): ApolloClient<NormalizedCacheObject> {
  const apolloClientInstance = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = apolloClientInstance.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    apolloClientInstance.cache.restore({
      ...existingCache,
      ...initialState,
    } as NormalizedCacheObject);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return apolloClientInstance;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = apolloClientInstance;
  }

  return apolloClientInstance;
}
