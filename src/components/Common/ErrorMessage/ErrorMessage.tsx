import './ErrorMessage.css';
import { ApolloError } from '@apollo/client/errors';
import { FC } from 'react';

type Props = {
  error: ApolloError;
};

export const ErrorMessage: FC<Props> = ({ error }): JSX.Element => {
  return (
    <div className='mx-auto max-w-[85%] xxl:max-w-[1224px] font-condensed'>
      <h2 className='error-title'
      >
        An Error Occurred!
      </h2>

      <p className='text-red-700 mb-4'>{error.message}</p>

      <button
        className='reload-button'
        type='button'
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
    </div>
  );
};
