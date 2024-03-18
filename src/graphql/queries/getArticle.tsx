import { gql, TypedDocumentNode } from '@apollo/client';

export const GET_ARTICLE: TypedDocumentNode<ArticlesResponse, QueryVariables> = gql`
  query GetArticle($locale: I18NLocaleCode!, $slug: String!) {
    articles(filters: { slug: { eq: $slug }}, locale: $locale) {
      data {
        id
        attributes {
          date
          readTime
          title
          tags {
            data {
              attributes {
                tagName
                color
              }
            }
          }
          altText
          slug
          locale
          content
          image {
            data {
              attributes {
                url
              }
            }
          }
          previousArticle {
            data {
              attributes {
                title
                altText
                slug
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
          nextArticle {
            data {
              attributes {
                title
                altText
                slug
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
