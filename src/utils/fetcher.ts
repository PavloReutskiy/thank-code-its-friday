import getClient from './graphql-client';
import { DocumentNode } from 'graphql';

const client = getClient();
const fetcher = async(query: DocumentNode): Promise<ArticlePreviewsResponse> => {
  const response = await client.query({ query });
  return response.data;
};

export default fetcher;
