'use client';
import React, { FC, ReactElement } from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { CodeBlock } from '../CodeBlock';
import { ArticleImage } from '../ArticleImage';
import Link from 'next/link';
import { generateId } from '@/utils/generateId';

type Props = {
  content: Article['content'];
};

export const ArticleContent: FC<Props> = ({ content }) => {
  return (
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
  );
};
