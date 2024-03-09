'use client';
import './Article.css';
import 'highlight.js/styles/ir-black.css';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import gsap from 'gsap';
import { BackToTopButton } from '@/components/BackToTopButton';
import { Tag } from '@/components/Tag';
import { useQuery, gql, TypedDocumentNode } from '@apollo/client';
import getClient from '@/utils/graphql-client';
import { Loader } from '@/components/Loader';
import { ErrorMessage } from '@/components/ErrorMessage';
import { RecomendedArticles } from '@/components/Articles/RecomendedArticles';
import { ShareButtons } from '@/components/Articles/ShareButtons';
import { ArticleDateAndReadTime } from '@/components/Articles/ArticleDateAndReadTime';
import { ArticleMainImage } from '@/components/Articles/ArticleMainImage';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { TableOfContents } from '@/components/Articles/TableOfContents';
import { generateId } from '@/utils/generateId';
import { CodeBlock } from '@/components/Articles/CodeBlock';
import { ArticleImage } from '@/components/Articles/ArticleImage';

const GET_ARTICLE: TypedDocumentNode<ArticlesResponse, QueryVariables> = gql`
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
        }
      }
    }
  }
`;

export const Article = (): JSX.Element => {
  const [locoScroll, setLocoScroll] = useState<LocomotiveScroll | null>(null);
  const [isQueryInitialized, setIsQueryInitialized] = useState<boolean>(false);
  const sideRef = useRef(null);
  const { locale, slug } = useParams();
  const client = getClient();

  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: {
      locale,
      slug,
    },
    client,
    onCompleted: () => setIsQueryInitialized(false),
    onError: () => setIsQueryInitialized(false),
  });

  const { attributes: article } = data?.articles.data[0] ?? {};
  const {
    date,
    readTime,
    title,
    altText,
    tags,
    image: articleMainImage,
    content,
    previousArticle,
    nextArticle,
  } = article ?? {};

  const tagList = tags?.data.map(tag => ({
    name: tag.attributes.tagName,
    color: tag.attributes.color,
  }));

  useEffect(() => {
    setIsQueryInitialized(true);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    const stickyElement = sideRef.current;

    const handleScroll = (): void => {
      const position = window.scrollY;

      if (position > lastScrollTop) {
        gsap.to(stickyElement, {
          top: '10px',
          duration: 0.5,
          delay: 0.3,
        });
      } else if (position < lastScrollTop) {
        gsap.to(stickyElement, {
          top: '110px',
          duration: 0.5,
          delay: 0.3,
        });
      }

      lastScrollTop = position <= 0 ? 0 : position;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [article]);

  useEffect(() => {
    (
      async(): Promise<void> => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const scroll = new LocomotiveScroll();
        setLocoScroll(scroll);
      }
    )();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading && isQueryInitialized) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <header className='mx-auto max-w-[85%] xxl:max-w-[1224px] mb-8 lg:mb-11 xl:mb-14'>
        <h1 className='heading-h1'>
          {title}
        </h1>

        <div className='flex justify-between items-center max-w-[800px] mx-auto mb-4'>
          {date && readTime && (
            <ArticleDateAndReadTime
              date={date}
              locale={locale}
              readTime={readTime}
            />
          )}

          {title && (
            <ShareButtons title={title} />
          )}
        </div>

        {altText && articleMainImage && (
          <ArticleMainImage
            altText={altText}
            articleMainImage={articleMainImage}
          />
        )}
      </header>

      <main className='article-main'>
        <div className='max-w-[800px] order-2 xl:order-1'>
          {content && (
            <BlocksRenderer
              content={content}
              blocks={{
                paragraph: ({ children }) => <p className='mb-4'>{children}</p>,
                list: ({ children, format }) => {
                  switch (format) {
                    case 'unordered':
                      return <ul className="unordered-list mb-4 flex flex-col gap-1">{children}</ul>;
                    case 'ordered':
                      return <ol className="mb-4 flex flex-col gap-1 list-decimal pl-6">{children}</ol>;
                    default:
                      return null;
                  }
                },
                heading: ({ children, level }) => {
                  const childElement = React.Children.toArray(children)[0] as ReactElement | undefined;
                  const text = childElement ? childElement.props.text : '';
                  const id = generateId(text);

                  switch (level) {
                    case 2:
                      return <h2 id={id} className='heading-h2'>{children}</h2>;
                    case 3:
                      return <h3>{children}</h3>;
                    case 4:
                      return <h4>{children}</h4>;
                    case 5:
                      return <h5>{children}</h5>;
                    default:
                      return null;
                  }
                },
                code: ({ children }) => <CodeBlock>{children}</CodeBlock>,
                image: ({ image }) => <ArticleImage image={image} />,
              }}
              modifiers={{
                bold: ({ children }) => <span className='font-bold'>{children}</span>,
                italic: ({ children }) => <span className="italic">{children}</span>,
                code: ({ children }) => <code className='code-style'>{children}</code>,

              }}
            />
          )}

          {
            previousArticle && nextArticle && (
              <RecomendedArticles
                previousArticle={previousArticle}
                nextArticle={nextArticle}
              />
            )
          }
        </div>

        <aside className='order-1 xl:order-2'>
          <span ref={sideRef} className='sticky'>
            <div className='tag-wrapper'>
              {tagList?.map(tag => (
                <Tag
                  key={tag.name}
                  tagName={tag.name}
                  color={tag.color}
                />
              ))}
            </div>

            {content && locoScroll && (
              <TableOfContents
                content={content}
                locoScroll={locoScroll}
              />
            )}
          </span>
        </aside>
      </main>

      <BackToTopButton locoScroll={locoScroll} />
    </>
  );
};
