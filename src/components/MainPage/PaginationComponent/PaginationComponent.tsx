'use client';
import Pagination from '@mui/material/Pagination';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  count: number;
  page: number;
}

export const PaginationComponent: FC<Props> = ({ count, page }): JSX.Element => {
  const isDesktop = useMediaQuery('(min-width:951px)');
  const isMobile = useMediaQuery('(min-width:501px)');
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (nwePage: number): void => {
    router.push(nwePage === 1 ? `/${pathname}` : `/${pathname}?page=${nwePage}`);
  };

  return (
    <nav className='mx-auto max-w-[85%] mb-8 flex justify-center'>
      <Pagination
        count={count}
        page={page}
        onChange={(_, newPage) => handlePageChange(newPage)}
        size={isDesktop ? 'large' : 'medium'}
        siblingCount={isMobile ? 1 : 0}
        boundaryCount={isMobile ? 1 : 0}
        color='primary'
        variant='outlined'
      />
    </nav>
  );
};
