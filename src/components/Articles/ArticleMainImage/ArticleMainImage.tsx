import { FC } from 'react';
import Image from 'next/image';

type Props = {
  altText: string;
  articleMainImage: {
    data: {
      attributes: {
        url: string;
      };
    };
  }
};

export const ArticleMainImage: FC<Props> = ({ altText, articleMainImage }): JSX.Element => {
  const { url } = articleMainImage.data.attributes;

  const imageUrl = process.env.NODE_ENV === 'production'
    ? url
    : `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;

  return (
    <div className='
      relative mx-auto max-w-[1224px]
      min-h-[225px] sm:min-h-[275px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[500px]
    '>
      <Image
        src={imageUrl}
        alt={altText}
        fill
        sizes="1224px"
        priority={true}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        className='rounded-3xl'
      />
    </div>
  );
};
