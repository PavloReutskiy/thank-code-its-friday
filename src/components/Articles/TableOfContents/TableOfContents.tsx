import { generateId } from '@/utils/generateId';
import { RootNode } from 'node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { FC } from 'react';

type Props = {
  content: RootNode[];
  locoScroll: LocomotiveScroll;
};

export const TableOfContents: FC<Props> = ({ content, locoScroll }): JSX.Element => {
  const extractHeadingTexts = (contentData: RootNode[] | undefined): string[] => {
    if (!contentData) {
      return [];
    }

    const levelTwoHeadingTexts = contentData.reduce<string[]>((accumulator, item) => {
      if (item.type === 'heading' && item.level === 2 && item.children.length > 0 && item.children[0].type === 'text') {
        accumulator.push(item.children[0].text || '');
      }
      return accumulator;
    }, []);

    return levelTwoHeadingTexts;
  };

  const headingTexts = extractHeadingTexts(content);

  const scrollToSection = (id: string): void => {
    if (locoScroll) {
      locoScroll.scrollTo(id, {
        duration: 2.5,
        offset: -90,
      });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className='bg-accent_colour p-3 rounded-2xl max-w-[500px]'>
      <h3 className='mb-1 text-lg md:text-xl font-semibold capitalize text-black'>Article summary</h3>
      <nav className='text-black text-base md:text-lg leading-snug'>
        <ol className='flex flex-col gap-1 list-decimal pl-6'>
          {headingTexts.map(text => {
            const id = generateId(text);
            return (
              <li key={id}>
                <a
                  className='lg:hover:text-dark_accent_colour transition-colors duration-300 ease'
                  href={`#${id}`}
                  onClick={() => {
                    scrollToSection(`#${id}`);
                  }}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};
