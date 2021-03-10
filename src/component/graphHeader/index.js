import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
  flexControl: {
    height: 25,
    // padding: theme.spacing(0.5),
    minWidth: 100,
  },
  selectlabel: {
    fontSize: '0.6rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 0.2rem',
    transform: 'scale(1.5)',
  },
  options: {
    width: '30%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: '0.7rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  red: {
    color: '#fa5f1c',
  },
  blue: {
    color: '#2979f2',
  },
}));

const SelectOption = () => {
  const cs = useStyles();
  const [value, setValue] = useState('');
  return (
    <Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="Months"
      labelId="select-outlined-label"
      id="select-outlined"
      inputProps={{
        name: 'month',
        id: 'outlined-month',
      }}
      className={cs.flexControl}
    >
      <MenuItem value="">
        <em>Months</em>
      </MenuItem>
      <MenuItem value="January">January</MenuItem>
      <MenuItem value="Febuary">Febuary</MenuItem>
      <MenuItem value="March">March</MenuItem>
    </Select>
  );
};

const GraphHeader = () => {
  const cs = useStyles();
  const dot = <span className={`${cs.bullet} ${cs.blue}`}>•</span>;
  const dotRed = <span className={`${cs.bullet} ${cs.red}`}>•</span>;
  return (
    <div className={cs.root}>
      <FormControl variant="outlined" size="small">
        <InputLabel
          className={cs.selectlabel}
          id="outlined-month-native-simple"
        >
          Months
        </InputLabel>
        <SelectOption />
      </FormControl>
      <div className={cs.options}>
        <span className={cs.itemTitle}>{dot} Projects done </span>
        <span className={cs.itemTitle}>{dotRed} New applications </span>
      </div>
    </div>
  );
};

export default GraphHeader;
