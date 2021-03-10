import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ListCompany from '../listCompany';
import { images, cNames } from '../../util/seed';

const size = 102;
const years = 3;
const revenue = 'NGN 1,000,000';
const state = ['Approved', 'Declined', 'Pending'];

const header = {
  header: true,
  img: null,
  cName: 'Company name',
  size: 'Company size',
  years: 'Yrs of Inc',
  revenue: 'Revenue',
  state: null,
};

const data = [];

const fillData = () =>
  data.push({
    cName: cNames[Math.floor(Math.random() * cNames.length)],
    img: images[Math.floor(Math.random() * images.length)],
    size,
    years,
    revenue,
    state: state[Math.floor(Math.random() * state.length)],
  });
cNames.forEach((element) => {
  fillData();
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflowX: 'scroll',
    marginBottom: theme.spacing(4),
  },
  content: {
    minWidth: 650,
  },
}));

const CompanyContent = () => {
  const cs = useStyles();

  const onClick = (i) => {
    console.log(i);
  };
  return (
    <div className={cs.root}>
      <div className={cs.content}>
        <ListCompany {...header} />
        {data.map((item, index) => {
          const { cName, img, size, years, revenue, state } = item;
          const prop = { cName, img, size, years, revenue, state };
          return (
            <ListCompany key={index} onClick={() => onClick(index)} {...prop} />
          );
        })}
      </div>
    </div>
  );
};

export default CompanyContent;
