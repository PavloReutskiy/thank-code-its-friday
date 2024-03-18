import { gql, TypedDocumentNode } from '@apollo/client';

export const GET_ARTICLE_PREVIEWS: TypedDocumentNode<ArticlePreviewsResponse, QueryVariables> = gql`
  query GetPreviews($locale: I18NLocaleCode!, $page: Int, $pageSize: Int) {
    articlePreviews(pagination: { page: $page, pageSize: $pageSize }, sort: "id:desc" locale: $locale) {
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
          description
          altText
          slug
          locale
          image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;
