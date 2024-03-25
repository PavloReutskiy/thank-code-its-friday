import { FC } from 'react';
import Image from 'next/image';

type Props = {
  image: {
    name: string;
    alternativeText?: string | null | undefined;
    url: string;
    caption?: string | null | undefined;
    width: number;
    height: number;
    formats?: Record<string, unknown> | undefined;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    previewUrl?: string | null | undefined;
    provider: string;
    provider_metadata?: unknown;
    createdAt: string;
    updatedAt: string;
  }
};

export const ArticleImage: FC<Props> = ({ image }): JSX.Element => {
  const imagePath = image.url.replace(/^http:\/\/localhost:1337/, '');

  const imageUrl = process.env.NODE_ENV === 'production'
    ? imagePath
    : `${process.env.NEXT_PUBLIC_BASE_URL}${imagePath}`;

  return (
    <figure className='mx-auto max-w-[800px] mb-4'>
      <Image
        src={imageUrl}
        alt={image.alternativeText || ''}
        sizes="800px"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        width={800}
        height={300}
        className='rounded-3xl mb-2'
      />
      <figcaption className='text-slate-400 text-sm md:text-base text-center'>{image.caption}</figcaption>
    </figure>
  );
};
