import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type Props = {
  previousArticle: NextAndPreviousAticle;
  nextArticle: NextAndPreviousAticle;
};

export const RecomendedArticles: FC<Props> = ({ previousArticle, nextArticle }): JSX.Element => {
  const t = useTranslations('Post');

  const getArticleInfo = (article: NextAndPreviousAticle): ArticleInfo => {
    const url = article.data.attributes.image?.data.attributes?.url;
    const { title } = article.data.attributes;
    const { altText } = article.data.attributes;
    const { slug } = article.data.attributes;

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
    imageUrl: previousArticleImageUrl,
    title: previousArticleTitle,
    altText: previousArticleImageAltText,
    slug: previousArticleSlug,
  } = getArticleInfo(previousArticle);

  const {
    imageUrl: nextArticleImageUrl,
    title: nextArticleTitle,
    altText: nextArticleImageAltText,
    slug: nextArticleSlug,
  } = getArticleInfo(nextArticle);

  return (
    <div className='pt-10 flex justify-between items-start flex-col md:items-center md:flex-row gap-7'>
      {previousArticleImageUrl && previousArticleImageAltText && (
        <Link href={`/post/${previousArticleSlug}`} className="flex justify-between items-center gap-4">
          <div className='relative min-w-[90px] min-h-[90px]'>
            <Image
              src={previousArticleImageUrl}
              alt={previousArticleImageAltText}
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
            <p className='
              text-label_color font-sans uppercase text-sm leading-normal font-bold tracking-widest mb-2
            '>
              {t('previous')}
            </p>
            <p className='font-bold capitalize text-black text-lg leading-tight'>
              {previousArticleTitle}
            </p>
          </div>
        </Link>
      )}

      <div className='w-px h-14 bg-border_color opacity-60 hidden md:block'></div>

      {nextArticleImageUrl && nextArticleImageAltText && (
        <Link href={`/post/${nextArticleSlug}`} className="flex justify-between items-center gap-4">
          <div className='text-left order-2 max-w-[320px] md:order-1 md:text-right'>
            <p className='
            text-label_color font-sans uppercase text-sm leading-normal font-bold tracking-widest mb-2
            '>
              {t('next')}
            </p>
            <p className='font-bold capitalize text-black text-lg leading-tight'>
              {nextArticleTitle}
            </p>
          </div>

          <div className='relative min-w-[90px] min-h-[90px] order-1 md:order-2'>
            <Image
              src={nextArticleImageUrl}
              alt={nextArticleImageAltText}
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
