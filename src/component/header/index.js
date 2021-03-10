import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconContext } from 'react-icons';
import { IoIosSearch, IoMdMenu } from 'react-icons/io';
import { BsFillBellFill } from 'react-icons/bs';

import Hidden from '@material-ui/core/Hidden';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

import { useGlobalStore } from '../provider';
import { OPEN, CLOSE, actionCreator } from '../../config/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  search: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
  textField: {
    width: '85%',
    height: 30,
    '& .MuiOutlinedInput-root': {
      height: theme.spacing(3),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  notification: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '& .MuiBadge-root': {
      marginRight: theme.spacing(1),
    },
  },
}));

const SearchComponent = () => {
  const cs = useStyles();
  const [value, setValue] = useState('');
  return (
    <FormControl className={cs.textField} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-search"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <IconContext.Provider value={{ size: '1rem', color: '#8a96a0' }}>
              <IoIosSearch />
            </IconContext.Provider>
          </InputAdornment>
        }
        inputProps={{ style: { fontSize: '0.7rem' } }}
        labelWidth={0}
      />
    </FormControl>
  );
};

const Header = () => {
  const cs = useStyles();
  const {
    state: { open },
    dispatch,
  } = useGlobalStore();

  const dispatchFxn = () => {
    const val = open ? CLOSE : OPEN;
    dispatch(actionCreator(val));
  };
  return (
    <div className={cs.root}>
      <div className={cs.search}>
        <Hidden mdUp implementation="js">
          <span className={cs.icon} onClick={dispatchFxn}>
            <IoMdMenu />
          </span>
        </Hidden>
        <SearchComponent />
      </div>
      <div className={cs.notification}>
        <Badge
          color="secondary"
          overlap="circle"
          badgeContent=" "
          variant="dot"
        >
          <BsFillBellFill />
        </Badge>
        <Avatar
          className={cs.small}
          src="https://res.cloudinary.com/thronetechnologies/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615075569/photo-1582233479366-6d38bc390a08_bavkr6.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
