import Pagination from '@mui/material/Pagination';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC } from 'react';

interface Props {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

export const PaginationComponent: FC<Props> = ({ count, page, onChange }): JSX.Element => {
  const isDesktop = useMediaQuery('(min-width:951px)');
  const isMobile = useMediaQuery('(min-width:501px)');

  return (
    <Pagination
      count={count}
      page={page}
      onChange={(_, newPage) => onChange(newPage)}
      size={isDesktop ? 'large' : 'medium'}
      siblingCount={isMobile ? 1 : 0}
      boundaryCount={isMobile ? 1 : 0}
      color='primary'
      variant='outlined'
    />
  );
};
