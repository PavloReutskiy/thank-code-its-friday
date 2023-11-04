import Image from 'next/image';
import arrow from 'public/assets/back-to-top-arrow.svg';
import { FC, useEffect, useState } from 'react';

type Props = {
  locoScroll: LocomotiveScroll | null;
};

export const BackToTopButton: FC<Props> = ({ locoScroll }): JSX.Element | null => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setShowButton(window.scrollY >= 100);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = (): void => {
    if (locoScroll) {
      locoScroll.scrollTo(0, { duration: 2.5 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    showButton ? (
      <button
        type='button'
        onClick={scrollUp}
        className='
          fixed bottom-12 right-12 w-14 h-14
          flex justify-center items-center
          bg-accent_colour rounded-md drop-shadow-md z-10 active:drop-shadow-none
          transform active:scale-95
        '
      >
        <Image
          src={arrow}
          width={30}
          height={30}
          alt='Back to top arrow'
        />
      </button>
    ) : null
  );
};