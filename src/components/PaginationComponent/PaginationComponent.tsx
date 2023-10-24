import Pagination from '@mui/material/Pagination';
import useMediaQuery from '@mui/material/useMediaQuery';

export const PaginationComponent = (): JSX.Element => {
  const isDesktop = useMediaQuery('(min-width:951px)');
  const isMobile = useMediaQuery('(min-width:501px)');

  return (
    <Pagination
      count={10}
      size={isDesktop ? 'large' : 'medium'}
      siblingCount={isMobile ? 1 : 0}
      boundaryCount={isMobile ? 1 : 0}
      color='primary'
      variant='outlined'
    />
  );
};
