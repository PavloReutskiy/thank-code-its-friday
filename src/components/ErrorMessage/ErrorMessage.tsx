'use client';
import { ApolloError } from '@apollo/client/errors';
import { FC } from 'react';

type Props = {
  error: ApolloError;
};

export const ErrorMessage: FC<Props> = ({ error }): JSX.Element => {
  return (
    <div className='mx-auto max-w-[1224px] font-condensed'>
      <h2 className='
          mt-[89px] sm:mt-[113px] xxl:mt-[129px] mb-2
          font-bold uppercase text-black text-left
          drop-shadow-md'
      >
        An Error Occurred!
      </h2>

      <p className='text-red-700 mb-4'>{error.message}</p>

      <button
        className='
          bg-transparent border border-text_color text-text_color
          hover:bg-text_color hover:text-white py-2 px-4
          rounded transition duration-300'
        type='button'
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
    </div>
  );
};
