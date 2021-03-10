import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FeedBack from '../feedback';
import Messages from '../messages';

import { images, cNames } from '../../util/seed';

const time = '25min ago';
const msg = `Hey don't forget to clear server cache`;

const arr = [];
arr.length = 5;
arr.fill(
  {
    cName: cNames[Math.floor(Math.random() * cNames.length)],
    img: images[Math.floor(Math.random() * images.length)],
    message: msg,
    time,
  },
  0
);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '32%',
    },
  },
}));

const Customer = () => {
  const cs = useStyles();
  return (
    <div className={cs.root}>
      <FeedBack />
      <Messages data={arr} />
    </div>
  );
};

export default Customer;
