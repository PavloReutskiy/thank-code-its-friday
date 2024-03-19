'use client';
import './Home.css';
import { useEffect, useState } from 'react';
import { PaginationComponent } from '@/components/PaginationComponent';
import { PostPreview } from '@/components/PostPreview';
import { LastPostPreview } from '@/components/LastPostPreview';
import { BackToTopButton } from '../BackToTopButton';
import { useQuery } from '@apollo/client';
import getApolloClient from '@/utils/getApolloClient';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { WebPageJsonLd } from 'next-seo';
import useLocoScroll from '@/hooks/useLocoScroll';
import { GET_ARTICLE_PREVIEWS } from '@/graphql/queries';
import useHomePageAnimation from '@/hooks/useHomePageAnimation';
import useCustomCursorAnimation from '@/hooks/useCustomCursorAnimation';

export const Home = (): JSX.Element => {
  const locoScroll = useLocoScroll();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const { locale } = useParams();
  const client = getApolloClient();

  const { loading, error, data } = useQuery(GET_ARTICLE_PREVIEWS, {
    variables: {
      locale,
      page: currentPage,
      pageSize: 10,
    },
    client,
  });

  const previews = data?.articlePreviews.data;
  const pageCount = data?.articlePreviews.meta.pagination.pageCount || 0;

  const handlePageChange = (nwePage: number): void => {
    setCurrentPage(nwePage);

    router.push(nwePage === 1 ? `/${pathname}` : `/${pathname}?page=${nwePage}`);
  };

  useEffect(() => {
    setCurrentPage(Number(page) || 1);
  }, [page]);

  useHomePageAnimation(data);
  useCustomCursorAnimation(data);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <header className='mx-auto max-w-[85%] font-condensed'>
        <h1 className='header-animation h1-wrapper'>
          <span className='h1-left-part'>
            Blog
          </span>

          <span className='h1-right-part'>
            Thank&nbsp;code it’s&nbsp;friday
          </span>
        </h1>
      </header>

      <main className='mx-auto max-w-[85%] font-condensed mb-8'>
        {previews && (
          <>
            {currentPage === 1 && (
              <LastPostPreview
                className='scroll-animation'
                preview={previews[0].attributes}
              />
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:mb-10 max-w-[1224px] mx-auto'>
              {previews.slice(currentPage === 1 ? 1 : 0).map(preview => (
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
        {pageCount > 1 && (
          <PaginationComponent
            count={pageCount}
            page={currentPage}
            onChange={handlePageChange}
          />
        )}
      </nav>

      <BackToTopButton locoScroll={locoScroll} />

      <div className='cursor'></div>

      <WebPageJsonLd
        useAppDir={true}
        description={
          locale === 'en'
            ? 'Welcome to my personal blog dedicated to web development.' +
              'Join me as we explore the world of programming, experiment with new' +
              'technologies and approaches, and grow together as professional web developers.'
            : 'Ласкаво прошу до мого блогу, який присвячено веб-розробці.' +
              'Приєднуйтесь до мене, аби разом досліджувати світ програмування, експериментувати' +
              'з новими технологіями та підходами, та разом рости як професійні веб-розробники.'
        }
        id='https://thankcodeitsfriday.com'
        lastReviewed='2023-07-10T08:00:00+08:00'
        reviewedBy={{
          type: 'Person',
          name: locale === 'en' ? 'Pavlo Reutskyi' : 'Павло Реуцький',
        }}
      />
    </>
  );
};
