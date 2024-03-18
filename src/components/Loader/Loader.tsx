// 'use client';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = (): JSX.Element => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <RotatingLines
        strokeColor="#151515"
        strokeWidth="4"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
