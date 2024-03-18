import { GraphQLClient } from 'graphql-request';

const getGraphQLClient = (): GraphQLClient => {
  const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  });

  return graphQLClient;
};

export default getGraphQLClient;
