import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const useCustomCursorAnimation = (data: ArticlePreviewsResponse | PreviewWithID[] | undefined): void => {
  useGSAP(() => {
    const cursor = document.querySelector('.cursor');
    const sectionElements = document.querySelectorAll('[data-preview]');
    const buttonElements = document.querySelectorAll('[data-preview] button');

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    let lastPosX = 0;
    let lastPosY = 0;
    const threshold = 0.1;

    gsap.ticker.add(() => {
      posX += (mouseX - posX) / 10;
      posY += (mouseY - posY) / 10;

      if (
        Math.abs(posX - lastPosX) > threshold ||
        Math.abs(posY - lastPosY) > threshold
      ) {
        gsap.set(cursor, {
          left: posX,
          top: posY,
        });

        lastPosX = posX;
        lastPosY = posY;
      }
    });

    const handleMouseMove = (event: MouseEvent): void => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    const handleActiveAdd = (): void => {
      cursor?.classList.add('active');
    };

    const handleActiveRemove = (): void => {
      cursor?.classList.remove('active');
    };

    document.addEventListener('mousemove', handleMouseMove);

    sectionElements.forEach(section => {
      section.addEventListener('mouseenter', handleActiveAdd);
      section.addEventListener('mouseleave', handleActiveRemove);
    });

    buttonElements.forEach(button => {
      button.addEventListener('mouseenter', handleActiveRemove);
      button.addEventListener('mouseleave', handleActiveAdd);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);

      sectionElements.forEach(section => {
        section.removeEventListener('mouseenter', handleActiveAdd);
        section.removeEventListener('mouseleave', handleActiveRemove);
      });

      buttonElements.forEach(button => {
        button.removeEventListener('mouseenter', handleActiveRemove);
        button.removeEventListener('mouseleave', handleActiveAdd);
      });
    };
  }, [data]);
};

export default useCustomCursorAnimation;
