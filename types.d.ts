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

interface ArticlesResponse {
  articles: {
    data: Array<ArticleWithID>;
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
  slug: string;
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

interface NextAndPreviousAticle {
  data: {
    attributes: Partial<Preview>;
  };
}

interface Article {
  title: string;
  date: string;
  readTime: string;
  slug: string;
  locale: string;
  altText: string;
  tags: {
    data: Array<{
      attributes: {
        tagName: string;
        color: string;
      }
    }>
  },
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  content: RootNode[];
  previousArticle?: NextAndPreviousAticle;
  nextArticle?: NextAndPreviousAticle;
}

// interface RichTextContent {
//   type: string;
//   format?: string;
//   level?: number
//   children: Array<RichTextContent | RichText>;
// }

// interface RichText {
//   type: string;
//   text: string;
//   bold?: boolean;
//   italic?: boolean;
//   code?: boolean;
// }

interface PreviewWithID {
  id: string;
  attributes: Preview;
}

interface ArticleWithID {
  id: string;
  attributes: Article;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface QueryVariables {
  locale: string | string[];
  page?: number;
  pageSize?: number;
  slug?: string | string[];
}

interface ArticleInfo {
  imageUrl: string | undefined;
  title: string | undefined;
  altText: string | undefined;
  slug: string | undefined;
}
