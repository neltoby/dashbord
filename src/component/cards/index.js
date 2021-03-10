import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
  root: {
    width: '48%',
    borderRadius: 1,
    border: 'none',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: '23%',
    },
  },
  title: {
    fontSize: '0.8rem',
    fontWeight: 600,
  },
  count: {
    fontSize: '0.9rem',
    fontWeight: 600,
  },
  direction: {
    fontSize: '0.7rem',
  },
  duration: {
    fontSize: '0.6rem',
    color: '#bcc9d4',
    marginBottom: theme.spacing(-1),
    paddingBottom: theme.spacing(-1),
  },
}));

const Cards = (props) => {
  const cs = useStyles();
  const { title, count, percent, duration, direction, color } = props.info;
  return (
    <Card
      className={cs.root}
      variant="outlined"
      style={{ backgroundColor: color }}
    >
      <CardContent>
        <Typography className={cs.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography className={cs.count}>{count}</Typography>
        <Typography
          component="div"
          className={cs.direction}
          style={{ color: direction ? '#86c870' : '#f52d56' }}
        >
          {direction ? <ImArrowUp /> : <ImArrowDown />} {percent}%
        </Typography>
        <Typography component="div" className={cs.duration}>
          {duration}
        </Typography>
      </CardContent>
    </Card>
  );
};

const CardContainer = (props) => {
  const cs = useStyles();
  const { arr } = props;
  return (
    <Typography component="div" className={cs.cardContainer}>
      {arr.map((item, index) => (
        <Cards
          info={{
            title: item.title,
            count: item.count,
            percent: item.percent,
            duration: item.duration,
            direction: item.direction,
            color: item.color,
          }}
          key={index}
        />
      ))}
    </Typography>
  );
};

CardContainer.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.object),
};

Cards.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    direction: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
  }),
};
export default CardContainer;
