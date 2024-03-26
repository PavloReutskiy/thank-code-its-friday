import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const usePageLoadAnimation = (currentPage?: number): void => {
  useGSAP(() => {
    if (window.innerWidth < 769) {
      gsap.set('.loading-animation', { opacity: 1, y: 0 });
      return;
    }

    window.scrollTo(0, 0);
    gsap.set('.loading-animation', { opacity: 0, y: -50 });
    gsap.to('.loading-animation', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power1.inOut',
    });
  }, [currentPage]);
};
