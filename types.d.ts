type Post = {
  id: number,
};

type LanguageType = 'en' | 'uk';

interface ArticlePreviewsResponse {
  articlePreviews: {
    data: Array<{
      id: string;
      attributes: {
        date: string;
        readTime: string;
        title: string;
        tags: {
          data: Array<{
            attributes: {
              tagName: string;
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
      };
    }>;
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
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
