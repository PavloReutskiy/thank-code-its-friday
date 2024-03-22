'use client';
import { FC, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Tag } from '@/components/Tag';
import { TableOfContents } from '@/components/Articles/TableOfContents';
import useLocoScroll from '@/hooks/useLocoScroll';

type Props = {
  article: Article;
};

export const ContentNavigation: FC<Props> = ({ article }) => {
  const sideRef = useRef(null);
  const locoScroll = useLocoScroll();

  const { tags, content } = article;

  const tagList = tags.data.map(tag => ({
    name: tag.attributes.tagName,
    color: tag.attributes.color,
  }));

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

  return (
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
  );
};
