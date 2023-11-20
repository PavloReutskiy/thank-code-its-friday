'use client';
import './Home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useState } from 'react';
import { PaginationComponent } from '@/components/PaginationComponent';
import { PostPreview } from '@/components/PostPreview';
import { LastPostPreview } from '@/components/LastPostPreview';
import { BackToTopButton } from '../BackToTopButton';
import { useQuery, gql, TypedDocumentNode } from '@apollo/client';
import getClient from '@/utils/graphql-client';
import { useParams } from 'next/navigation';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';

const GET_ARTICLE_PREVIEWS: TypedDocumentNode<ArticlePreviewsResponse, QueryVariables> = gql`
  query GetPreviews($locale: I18NLocaleCode!) {
    articlePreviews(sort: "id:desc" locale: $locale) {
      data {
        id
        attributes {
          date
          readTime
          title
          tags {
            data {
              attributes {
                tagName
                color
              }
            }
          }
          description
          altText
          locale
          image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

export const Home = (): JSX.Element => {
  const [locoScroll, setLocoScroll] = useState<LocomotiveScroll | null>(null);
  const [isQueryInitialized, setIsQueryInitialized] = useState(false);

  const { locale } = useParams();
  const client = getClient();
  const { loading, error, data } = useQuery(GET_ARTICLE_PREVIEWS, {
    variables: { locale },
    client,
    onCompleted: () => setIsQueryInitialized(false),
    onError: () => setIsQueryInitialized(false),
  });

  const previews = data?.articlePreviews.data;

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setIsQueryInitialized(true);
  }, []);

  useLayoutEffect(() => {
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

  useEffect(() => {
    (
      async(): Promise<void> => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const scroll = new LocomotiveScroll();
        setLocoScroll(scroll);
      }
    )();
  }, []);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const sectionElements = document.querySelectorAll('section');
    const buttonElements = document.querySelectorAll('section button');

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

      if (Math.abs(posX - lastPosX) > threshold || Math.abs(posY - lastPosY) > threshold) {
        gsap.set(cursor, {
          left: posX,
          top: posY,
        });

        lastPosX = posX;
        lastPosY = posY;
      }
    });

    const handleMouseMove = (event: MouseEvent):void => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    const handleActiveAdd = ():void => {
      cursor?.classList.add('active');
    };

    const handleActiveRemove = ():void => {
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

  if (loading && isQueryInitialized) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <header className='mx-auto max-w-[85%] font-condensed'>
        <h1 className='
          header-animation
          flex flex-col justify-center items-center
          md:flex-row md:gap-6 lg:gap-4
          mt-[89px] sm:mt-[113px] xxl:mt-[129px] mb-4 sm:mb-7 md:mb-10
          font-bold uppercase text-black text-center leading-none
          drop-shadow-md
        '>
          <div className='
            ml-[-7px]
            text-[105px] sm:text-[160px] md:text-[125px] lg:text-[160px] xl:text-[200px] xxl:text-[245px]
            leading-[0.9] tracking-[-7px] lg:tracking-[-9px] xxl:tracking-[-12px]
          '>
            Blog
          </div>
          <div className='
            md:max-w-[300px] lg:max-w-[370px] xl:max-w-[470px] xxl:max-w-[545px]
            text-[21px] sm:text-[33px] md:text-[45px] lg:text-[55px] xl:text-[70px] xxl:text-[80px]
            md:leading-tight lg:leading-[1.2]
            md:text-left
          '>
            Thank&nbsp;code it’s&nbsp;friday
          </div>
        </h1>
      </header>

      <main className='mx-auto max-w-[85%] font-condensed mb-8'>
        {previews && (
          <>
            <LastPostPreview className='scroll-animation' preview={previews[0].attributes} />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:mb-10 max-w-[1224px] mx-auto'>
              {previews.slice(1).map(preview => (
                <PostPreview
                  className='scroll-animation'
                  preview={preview.attributes}
                  key={preview.id}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <nav className='mx-auto max-w-[85%] mb-8 flex justify-center'>
        {data && <PaginationComponent />}
      </nav>

      <BackToTopButton locoScroll={locoScroll} />

      <div className='cursor'></div>
    </>
  );
};
