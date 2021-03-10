import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dot from '../dot';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import InputBase from '@material-ui/core/InputBase';

// const Dot = lazy(() => import("../dot"));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column',
      overflowX: 'scroll',
    },
  },
  buttongroup: {
    '& .MuiButton-root': {
      textTransform: 'none',
      fontSize: '0.7rem',
    },
  },
  active: {
    borderBottom: '2px solid #2979f2',
  },
  flexControl: {
    height: 25,
    minWidth: 50,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
    },
  },
  selectlabel: {
    fontSize: '0.6rem',
  },
}));

const SelectComponent = () => {
  const cs = useStyles();
  const [sort, setSort] = useState('');
  return (
    <FormControl variant="outlined" size="small">
      <InputLabel className={cs.selectlabel} id="select-label">
        Sort
      </InputLabel>
      <Select
        labelId="select-labelid"
        id="sort-select"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        inputProps={{
          name: 'sort',
          id: 'outlined-sort',
        }}
        className={cs.flexControl}
      >
        <MenuItem value="">
          <em>Sort</em>
        </MenuItem>
        <MenuItem value="Marked">Marked</MenuItem>
        <MenuItem value="Unmarked">Unmarked</MenuItem>
      </Select>
    </FormControl>
  );
};

const ButtonTypes = () => {
  const cs = useStyles();
  const [type, setType] = useState();
  const onClick = (type) => {
    setType(type);
  };
  return (
    <ButtonGroup
      className={cs.buttongroup}
      size="small"
      aria-label="small outlined button group"
    >
      <Button
        onClick={() => onClick('all')}
        className={type === 'all' ? cs.active : ''}
      >
        All
      </Button>
      <Button
        onClick={() => onClick('approved')}
        className={type === 'approved' ? cs.active : ''}
      >
        <Dot color="#50b83c" /> Approved
      </Button>
      <Button
        onClick={() => onClick('pending')}
        className={type === 'pending' ? cs.active : ''}
      >
        <Dot color="#ffdb51" /> Pending
      </Button>
      <Button
        onClick={() => onClick('declined')}
        className={type === 'declined' ? cs.active : ''}
      >
        <Dot color="#fa5f1c" /> Declined
      </Button>
    </ButtonGroup>
  );
};

const CompanyHeader = () => {
  const cs = useStyles();

  return (
    <div className={cs.root}>
      <span>
        <ButtonTypes />
      </span>
      <span>
        <SelectComponent />
      </span>
    </div>
  );
};

export default CompanyHeader;
