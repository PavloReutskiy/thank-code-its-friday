import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import React, { FC, ReactElement, useRef } from 'react';
import { CodeBlock } from '../CodeBlock';
import { ArticleImage } from '../ArticleImage';
import Link from 'next/link';
import { RecomendedArticles } from '../RecomendedArticles';
import { TableOfContents } from '../TableOfContents';
import { Tag } from '@/components/Tag';
import { generateId } from '@/utils/generateId';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type Props = {
  article: Article;
  locoScroll: LocomotiveScroll | null;
};

const ArticleMain: FC<Props> = ({ article, locoScroll }) => {
  const sideRef = useRef(null);

  useGSAP((_context, contextSafe) => {
    let lastScrollTop = 0;
    const stickyElement = sideRef.current;

    const handleScroll = contextSafe ? contextSafe((): void => {
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
    }) : (): void => {};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [article]);

  const {
    tags,
    content,
    previousArticle,
    nextArticle,
  } = article;

  const tagList = tags.data.map(tag => ({
    name: tag.attributes.tagName,
    color: tag.attributes.color,
  }));

  return (
    <main className="scroll-animation article-main">
      <div className="max-w-[800px] order-2 xl:order-1">
        <BlocksRenderer
          content={content}
          blocks={{
            paragraph: ({ children }) => <p className="mb-4">{children}</p>,
            list: ({ children, format }) => {
              switch (format) {
                case 'unordered':
                  return (
                    <ul className="unordered-list mb-4 flex flex-col gap-1">
                      {children}
                    </ul>
                  );
                case 'ordered':
                  return (
                    <ol className="mb-4 flex flex-col gap-1 list-decimal pl-6">
                      {children}
                    </ol>
                  );
                default:
                  return null;
              }
            },
            heading: ({ children, level }) => {
              const childElement = React.Children.toArray(children)[0] as
                | ReactElement
                | undefined;
              const text = childElement ? childElement.props.text : '';
              const id = generateId(text);

              switch (level) {
                case 2:
                  return (
                    <h2 id={id} className="heading-h2">
                      {children}
                    </h2>
                  );
                case 3:
                  return (
                    <h3 id={id} className="heading-h3">
                      {children}
                    </h3>
                  );
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
            link: ({ children, url }) => (
              <Link
                href={url}
                className="text-[#1976d2] lg:hover:underline underline-offset-4"
              >
                {children}
              </Link>
            ),
          }}
          modifiers={{
            bold: ({ children }) => (
              <span className="font-bold">{children}</span>
            ),
            italic: ({ children }) => (
              <span className="italic">{children}</span>
            ),
            code: ({ children }) => (
              <code className="code-style">{children}</code>
            ),
          }}
        />

        <RecomendedArticles
          previousArticle={previousArticle}
          nextArticle={nextArticle}
        />
      </div>

      <aside className="order-1 xl:order-2">
        <span ref={sideRef} className="sticky">
          <div className="tag-wrapper">
            {tagList?.map(tag => (
              <Tag key={tag.name} tagName={tag.name}
                color={tag.color} />
            ))}
          </div>

          {locoScroll && (
            <TableOfContents content={content} locoScroll={locoScroll} />
          )}
        </span>
      </aside>
    </main>
  );
};

export default ArticleMain;

