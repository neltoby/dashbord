import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Companies from '../companies';
import Customer from '../customer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: theme.spacing(0),
    marginBottom: theme.spacing(3),
    flexWrap: 'wrap',
  },
}));

const DisplayContent = () => {
  const cs = useStyles();
  return (
    <div className={cs.root}>
      <Companies />
      <Customer />
    </div>
  );
};

export default DisplayContent;
