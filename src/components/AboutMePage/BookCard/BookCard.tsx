import React, { FC } from 'react';
import Image from 'next/image';

type Props = {
  activeBook: Book;

};

export const BookCard: FC<Props> = ({ activeBook }): JSX.Element => {
  const {
    image,
    altText,
    title,
    author,
    date,
    description,
  } = activeBook;

  return (
    <div className='book-content'>
      <div className='image-wrapper'>
        <Image
          className='image'
          src={image}
          alt={altText}
          width={240}
          height={320}
        />
      </div>

      <div className='content-wrapper'>
        <h3 className='title'>{title}</h3>
        <p className='book-author'>by <span className='info'>{author}</span></p>
        <p className='date'>Published <span className='info'>{date}</span></p>
        <p className='description'>
          {description}
        </p>
      </div>
    </div>
  );
};
