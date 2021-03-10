import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { IoAddOutline, IoEllipsisVerticalOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: '100%',
    border: '1px solid #ddd',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    '& > span': {
      color: '#2979f2',
      fontWeight: 'bold',
    },
  },
  button: {
    textTransform: 'none',
    backgroundColor: '#2979f2',
  },
  list: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(0.7),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(0),
  },
  flexBox: {
    display: 'flex',
  },
  img: {
    width: '10%',
  },
  listContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingBottom: 0,
    marginBottom: 0,
    width: '70%',
    '& > p:first-child': {
      fontSize: '0.7rem',
      fontWeight: 'bold',
      color: '#2979f2',
      marginTop: theme.spacing(0),
    },
    '& > p:nth-child(2)': {
      fontSize: '0.7rem',
      fontWeight: 400,
      color: '#778491',
      marginTop: theme.spacing(-1.5),
    },
    '& > p:last-child': {
      fontSize: '0.6rem',
      fontWeight: 400,
      color: '#778491',
      marginTop: theme.spacing(-1.5),
    },
  },
  small: {
    width: 25,
    height: 25,
  },
  icon: {
    width: '10%',
    flexDirection: 'row-reverse',
  },
}));

const MessageList = (props) => {
  const cs = useStyles();
  const { img, cName, message, time, last } = props;
  return (
    <>
      <div className={cs.list}>
        <div className={`${cs.flexBox} ${cs.img}`}>
          <Avatar src={img} variant="square" alt={cName} className={cs.small} />
        </div>
        <div className={`${cs.flexBox} ${cs.listContent}`}>
          <p>{cName}</p>
          <p>{message}</p>
          <p>{time}</p>
        </div>
        <div className={`${cs.flexBox} ${cs.icon}`}>
          <IoEllipsisVerticalOutline />
        </div>
      </div>
      {last ? null : <Divider light />}
    </>
  );
};

MessageList.propTypes = {
  img: PropTypes.string.isRequired,
  cName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
};

const Messages = (props) => {
  const cs = useStyles();
  const { data } = props;
  const len = data.length;
  return (
    <div className={cs.root}>
      <div className={cs.title}>
        <span>Messages</span>
        <Button
          variant="contained"
          color="secondary"
          className={cs.button}
          size="small"
          startIcon={
            <IconContext.Provider value={{ color: '#fff', size: '0.7rem' }}>
              <IoAddOutline />
            </IconContext.Provider>
          }
        >
          New message
        </Button>
      </div>
      <div className={cs.msgList}>
        <IconContext.Provider value={{ color: '#717579', size: '1.3rem' }}>
          {data.map((item, i) => {
            return i === len - 1 ? (
              <MessageList key={i} {...item} last={true} />
            ) : (
              <MessageList key={i} {...item} last={false} />
            );
          })}
        </IconContext.Provider>
      </div>
    </div>
  );
};

Messages.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Messages;
