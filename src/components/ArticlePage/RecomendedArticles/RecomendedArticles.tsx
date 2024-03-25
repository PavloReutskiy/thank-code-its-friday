import './RecomendedArticles.css';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  previousArticle: NextAndPreviousAticle;
  nextArticle: NextAndPreviousAticle;
  locale: string;
};

export const RecomendedArticles: FC<Props> = ({ previousArticle, nextArticle, locale }): JSX.Element => {
  const getArticleInfo = (article: NextAndPreviousAticle): ArticleInfo => {
    const {
      title,
      altText,
      slug,
      image,
    } = article.data.attributes;

    const url = image?.data.attributes.url;

    const imageUrl = process.env.NODE_ENV === 'production'
      ? url
      : `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;

    return {
      imageUrl,
      title,
      altText,
      slug,
    };
  };

  const {
    imageUrl: previousImageUrl,
    title: previousTitle,
    altText: previousAltText,
    slug: previousSlug,
  } = getArticleInfo(previousArticle);

  const {
    imageUrl: nextImageUrl,
    title: nextTitle,
    altText: nextAltText,
    slug: nextSlug,
  } = getArticleInfo(nextArticle);

  return (
    <div className='pt-10 flex justify-between items-start flex-col md:items-center md:flex-row gap-7'>
      {previousImageUrl && previousAltText && (
        <Link
          href={`/post/${previousSlug}`}
          className="recomended-link"
        >
          <div className='relative min-w-[90px] min-h-[90px]'>
            <Image
              src={previousImageUrl}
              alt={previousAltText}
              fill
              sizes="90px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className='rounded-2xl'
            />
          </div>

          <div className='text-left max-w-[320px]'>
            <p className='recomended-label'>
              {locale === 'en' ? 'Previous' : 'Попередня' }
            </p>

            <p className='recomended-title'>
              {previousTitle}
            </p>
          </div>
        </Link>
      )}

      <div className='w-px h-14 bg-border_color opacity-60 hidden md:block'></div>

      {nextImageUrl && nextAltText && (
        <Link
          href={`/post/${nextSlug}`}
          className="recomended-link"
        >
          <div className='text-left order-2 max-w-[320px] md:order-1 md:text-right'>
            <p className='recomended-label'>
              {locale === 'en' ? 'Next' : 'Наступна' }
            </p>
            <p className='recomended-title'>
              {nextTitle}
            </p>
          </div>

          <div className='relative min-w-[90px] min-h-[90px] order-1 md:order-2'>
            <Image
              src={nextImageUrl}
              alt={nextAltText}
              fill
              sizes="90px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className='rounded-2xl'
            />
          </div>
        </Link>
      )}
    </div>
  );
};
