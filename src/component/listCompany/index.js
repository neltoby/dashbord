import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';

import Dot from '../dot';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    width: '100%',
  },
  content: {
    paddingRight: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5),
    display: 'flex',
    justifyContent: 'space-between',
    width: 'inherit',
    fontSize: '0.7rem',
  },
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkbox: {
    width: '5%',
  },
  img: {
    width: '7%',
  },
  cName: {
    width: '28%',
  },
  size: {
    width: '14%',
  },
  years: {
    width: '10%',
  },
  revenue: {
    width: '15%',
  },
  state: {
    width: '14%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dotname: {
    padding: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
    paddingleft: theme.spacing(1),
    borderRadius: 1000,
  },
}));

const ListCompany = (props) => {
  const cs = useStyles();
  const { header, img, cName, size, years, revenue, state, onClick } = props;

  const [checked, setChecked] = useState(false);
  const [over, setOver] = useState();

  const backgroundColor = header
    ? null
    : state.toLowerCase() === 'approved'
    ? '#e3f1df'
    : state.toLowerCase() === 'declined'
    ? '#fdece2'
    : '#fffae8';
  const color = header
    ? null
    : state.toLowerCase() === 'approved'
    ? '#50b83c'
    : state.toLowerCase() === 'declined'
    ? '#fa5f1c'
    : '#ffca00';

  const onChange = (e) => {
    setChecked(!checked);
    onClick();
  };
  const onMouseOver = (e) => {
    setOver(true);
  };

  const onMouseOut = (e) => {
    setOver(false);
  };

  return (
    <div
      className={cs.root}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      style={{ backgroundColor: over ? '#eaeffd' : '' }}
    >
      <div className={cs.content} style={{ fontWeight: header ? 'bold' : 500 }}>
        <div className={`${cs.item} ${cs.checkbox}`}>
          <Checkbox
            edge="start"
            checked={checked}
            onChange={onChange}
            color="primary"
          />
        </div>
        <div className={`${cs.item} ${cs.img}`}>
          {header ? null : <img src={img} alt="logo" width="25" height="25" />}
        </div>
        <div className={`${cs.item} ${cs.cName}`}>{cName}</div>
        <div className={`${cs.item} ${cs.size}`}>{size}</div>
        <div className={`${cs.item} ${cs.years}`}>{years}</div>
        <div className={`${cs.item} ${cs.revenue}`}>{revenue}</div>
        <div className={cs.state}>
          {header ? null : (
            <span className={cs.dotname} style={{ backgroundColor, color }}>
              <Dot color={color} />
              {state}
            </span>
          )}
        </div>
      </div>
      <Divider light />
    </div>
  );
};

ListCompany.propTypes = {
  header: PropTypes.bool,
  img: PropTypes.string,
  cName: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  years: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  revenue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  state: PropTypes.oneOf(['Approved', 'Declined', 'Pending']),
  onClick: PropTypes.func,
};

export default ListCompany;
