type Post = {
  id: number,
};

type LanguageType = 'en' | 'uk';

interface ArticlePreviewsResponse {
  articlePreviews: {
    data: Array<PreviewWithID>;
    meta: {
      pagination: Pagination;
    };
  };
}

interface Preview {
  date: string;
  readTime: string;
  title: string;
  tags: {
    data: Array<{
      attributes: {
        tagName: string;
        color: string;
      }
    }>
  },
  description: string;
  altText: string;
  locale: string;
  image: {
    data: {
      attributes: {
        url: string;
        width: string;
        height: string;
      };
    };
  };
}

interface PreviewWithID {
  id: string;
  attributes: Preview;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface QueryVariables {
  locale: string | string[];
  page: number;
  pageSize: number;
}
