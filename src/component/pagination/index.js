import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    '& .Mui-selected ': {
      backgroundColor: '#110b56',
      color: '#fff',
    },
    '& .MuiPaginationItem-root': {
      fontSize: '0.7rem',
      borderRadius: 0,
    },
  },
}));

const PaginationComponent = () => {
  const cs = useStyles();
  return (
    <div className={cs.root}>
      <Pagination
        className={cs.pagination}
        count={200}
        defaultPage={1}
        siblingCount={0}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default PaginationComponent;
