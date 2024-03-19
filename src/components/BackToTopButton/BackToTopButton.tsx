import './BackToTopButton.css';
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
        className='back-button'
      >
        <Image
          src={arrow}
          width={25}
          height={25}
          alt='Back to top arrow'
          className='aspect-square'
        />
      </button>
    ) : null
  );
};
