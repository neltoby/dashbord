import React from 'react';
import { Chart } from 'react-google-charts';
import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '7rem',
    width: '100%',
  },
  loading: {
    marginRight: theme.spacing(1),
  },
}));

const Loader = () => {
  const cs = useStyles();
  return (
    <div className={cs.loader}>
      <span>
        <CircularProgress className={cs.loading} />
        Loading chart
      </span>
    </div>
  );
};

const Graph = () => {
  const cs = useStyles();
  return (
    <div className={cs.root}>
      <Chart
        width={'100%'}
        height={'8rem'}
        chartType="AreaChart"
        loader={<Loader />}
        data={[
          ['Month', 'Project done', 'New application'],
          ['Jan', 1000, 400],
          ['Feb', 1170, 460],
          ['Mar', 660, 1120],
          ['Apr', 1030, 540],
          ['May', 1030, 540],
          ['Jun', 1030, 540],
          ['Jul', 1030, 540],
          ['Aug', 1030, 540],
          ['Sep', 1030, 540],
          ['Oct', 1030, 540],
          ['Nov', 1030, 540],
          ['Dec', 1030, 540],
        ]}
        options={{
          chartArea: { width: '90%', height: '70%' },
          vAxis: { minValue: 0 },
        }}
        rootProps={{ 'data-testid': 'graph' }}
      />
    </div>
  );
};

export default Graph;
