import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { MutableRefObject } from 'react';

const useNavbarAnimation = (navRef: MutableRefObject<null>): void => {
  useGSAP((_context, contextSafe) => {
    let lastScrollTop = 0;

    if (window.innerWidth >= 769) {
      gsap.to(navRef.current, {
        y: '0%',
        opacity: 1,
        duration: 1,
      });
    }

    const handleScroll = contextSafe ? contextSafe((): void => {
      const position = window.scrollY;

      if (window.innerWidth < 769) {
        gsap.set(navRef.current, { opacity: 1, y: 0 });
        return;
      }

      if (position > lastScrollTop) {
        gsap.to(navRef.current, {
          y: '-100%',
          duration: .5,
          delay: .3,
        });
      } else if (position < lastScrollTop) {
        gsap.to(navRef.current, {
          y: '0%',
          duration: .5,
          delay: .3,
        });
      }

      lastScrollTop = position <= 0 ? 0 : position;
    }) : (): void => {};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useNavbarAnimation;
