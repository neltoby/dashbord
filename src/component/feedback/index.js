import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { IoPerson } from 'react-icons/io5';
import { IconContext } from 'react-icons';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: '#e7f5fe',
    border: 'none',
    borderRadius: 0,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: '100%',
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
  },
  displayContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  satisfaction: {
    '& > p:first-child': {
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#4188f3',
    },
    '& > p:last-child': {
      marginTop: theme.spacing(-2),
      fontSize: '0.7rem',
      color: '#79869f',
    },
  },
  response: {
    '& > p:first-child': {
      fontSize: '0.7rem',
      color: '#4188f3',
    },
    '& > p:last-child': {
      marginTop: theme.spacing(-2),
      fontSize: '0.8rem',
      fontWeight: 'bold',
      color: '#465263',
    },
  },
  font: {
    fontSize: '0.6rem',
    color: '#79869f',
  },
  flexBox: {
    display: 'flex',
  },
  title: {
    width: '16%',
    justifyContent: 'flex-start',
  },
  icons: {
    width: '67%',
    justifyContent: 'space-between',
  },
  percent: {
    width: '11',
    flexDirection: 'row-reverse',
  },
}));

const arr = [];
arr.length = 10;
arr.fill(0, 0);

const data = [
  {
    type: 'top',
    top: 'Customer Satisfaction',
    bottom: 'Across help desk this month',
  },
  {
    type: 'bottom',
    top: 'Response received',
    bottom: '390',
  },
];

const displayData = [
  {
    title: 'Positive',
    color: '#2979f2',
    amount: 60,
  },
  {
    title: 'Neutral',
    color: '#ffca00',
    amount: 30,
  },
  {
    title: 'Negative',
    color: '#fa5f1c',
    amount: 20,
  },
];

const DivPresentation = (props) => {
  const cs = useStyles();
  const { type, top, bottom } = props;
  return (
    <div className={type === 'top' ? cs.satisfaction : cs.response}>
      <p>{top}</p>
      <p>{bottom}</p>
    </div>
  );
};

const ReUsedDisplay = (props) => {
  const cs = useStyles();
  const { title, color, amount } = props;
  const colored = Math.floor(amount / 10);
  return (
    <div className={cs.displayContainer}>
      <div className={` ${cs.flexBox} ${cs.title} ${cs.font}`}>{title}</div>
      <div className={`${cs.flexBox} ${cs.icons}`}>
        {arr.map((item, i) => {
          return (
            <IconContext.Provider
              key={i}
              value={{ color: i < colored ? color : '#fff', size: '1em' }}
            >
              <IoPerson />
            </IconContext.Provider>
          );
        })}
      </div>
      <div className={` ${cs.flexBox} ${cs.percent} ${cs.font}`}>{amount}%</div>
    </div>
  );
};

ReUsedDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

DivPresentation.propTypes = {
  type: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
};

const FeedBack = () => {
  const cs = useStyles();
  return (
    <Paper elevation={0} className={cs.root}>
      {data.map((item, i) => (
        <DivPresentation key={i} {...item} />
      ))}
      {displayData.map((item, i) => (
        <ReUsedDisplay key={i} {...item} />
      ))}
    </Paper>
  );
};

export default FeedBack;
