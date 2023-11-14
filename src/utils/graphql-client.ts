import { ApolloClient, InMemoryCache, NormalizedCacheObject, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  };
});

let client: ApolloClient<NormalizedCacheObject> | null = null;

const getClient = (): ApolloClient<NormalizedCacheObject> => {
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }

  return client;
};

export default getClient;
