import { useMemo } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from '../lib/apollo-client';

export function useApollo(
  initialState: Record<string, unknown> = null
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
