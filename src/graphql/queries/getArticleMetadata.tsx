import { gql } from 'graphql-request';

export const GET_ARTICLE_METADATA = gql`
  query GetArticle($locale: I18NLocaleCode!, $slug: String!) {
    articles(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        id
        attributes {
          SEO {
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
