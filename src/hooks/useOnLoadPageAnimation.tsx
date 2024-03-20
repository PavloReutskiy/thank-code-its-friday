import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useOnLoadPageAnimation = (data?: ArticlePreviewsResponse | ArticlesResponse | undefined): void => {
  useGSAP(() => {
    if (window.innerWidth < 769) {
      gsap.set('.scroll-animation', { opacity: 1, y: 0 });
      gsap.set('.header-animation', { opacity: 1, y: 0 });
      return;
    }

    const timeline = gsap.timeline();

    timeline.to('.header-animation', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power1.inOut',
    });

    const triggerElements = document.querySelectorAll('.scroll-animation');

    triggerElements.forEach((element, index) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 100%',
          toggleActions: 'restart none none reverse',
        },
        opacity: 1,
        y: 0,
        delay: index * 0.05,
        duration: 1,
        ease: 'power1.inOut',
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [data]);
};

export default useOnLoadPageAnimation;
