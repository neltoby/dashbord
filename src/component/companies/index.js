import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CompanyHeader from '../companyHeader';
import CompanyContent from '../companyContent';
import PaginationComponent from '../pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #ddd',
    width: '100%',
    padding: theme.spacing(0),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '65%',
    },
  },
}));

const Companies = () => {
  const cs = useStyles();
  return (
    <div className={cs.root}>
      <CompanyHeader />
      <CompanyContent />
      <PaginationComponent />
    </div>
  );
};

export default Companies;
