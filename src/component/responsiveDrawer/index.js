import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { IconContext } from 'react-icons';
import { IoChatbubble, IoOptions } from 'react-icons/io5';
import { IoMdHome, IoMdPricetag, IoIosPeople } from 'react-icons/io';
import List from '@material-ui/core/List';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { useGlobalStore } from '../provider';
import { CLOSE, actionCreator } from '../../config/actions';

const drawerWidth = '100%';
const drawerHeight = '100vh';

const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    height: drawerHeight,
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 50,
    },
    width: drawerWidth,
    backgroundColor: '#f4f5fa',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  drawerList: {
    width: 250,
  },
  drawer: {
    backgroundColor: '#fff',
    [theme.breakpoints.up('md')]: {
      width: '15%',
    },
  },
  drawerPaper: {
    width: drawerHeight,
  },
  list: {
    width: drawerWidth,
    // height: drawerHeight,
    color: '#637381',
    '& :hover': {
      borderRight: '4px solid #4d8ef4',
      '& .MuiListItemText-root': {
        borderRight: 'none',
        color: '#4d8ef4',
        '& :hover': {
          borderRight: 'none',
        },
        '& span': {
          fontWeight: 600,
        },
      },
      '& .MuiListItemIcon-root': {
        borderRight: 'none',
        color: '#4d8ef4',
        '& :hover': {
          borderRight: 'none',
        },
      },
    },
  },
  listText: {
    paddingLeft: 0,
    marginLeft: 0,
    '& span': {
      fontWeight: 500,
      fontSize: '0.8rem',
    },
  },
  listIcon: {
    minWidth: 40,
  },
  lastList: {
    alignSelf: 'flex-end',
    width: 'inherit',
    '& :hover': {
      borderRight: '4px solid #4d8ef4',
      '& .MuiListItemText-root': {
        borderRight: 'none',
        color: '#4d8ef4',
        '& :hover': {
          borderRight: 'none',
        },
        '& span': {
          fontWeight: 600,
        },
      },
      '& .MuiListItemIcon-root': {
        borderRight: 'none',
        color: '#4d8ef4',
        '& :hover': {
          borderRight: 'none',
        },
      },
    },
  },
}));

const listitem = [
  {
    text: 'Dashboard',
    icon: <IoMdHome />,
  },
  {
    text: 'Companies',
    icon: <IoIosPeople />,
  },
  {
    text: 'Projects',
    icon: <IoMdPricetag />,
  },
  {
    text: 'Messages',
    icon: <IoChatbubble />,
  },
];

const DrawerComponent = (props) => {
  const { modal } = props;
  const cs = useStyles();
  const { dispatch } = useGlobalStore();

  return (
    <div className={cs.drawerContainer}>
      <IconContext.Provider value={{ size: '1.8em', className: cs.icons }}>
        <List
          className={cs.list}
          onClick={modal ? () => dispatch(actionCreator(CLOSE)) : null}
        >
          {listitem.map((item, index) => (
            <ListItem button key={`${item.text}${index}`}>
              <IconContext.Provider
                value={{ size: '1.5em', className: cs.icons }}
              >
                <ListItemIcon className={cs.listIcon}>{item.icon}</ListItemIcon>
              </IconContext.Provider>
              <ListItemText className={cs.listText}>
                <span>{item.text}</span>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: '1.8em', className: cs.icons }}>
        <List
          className={cs.lastList}
          onClick={modal ? () => dispatch(actionCreator(CLOSE)) : null}
        >
          <ListItem button>
            <ListItemIcon className={cs.listIcon}>
              <IoOptions />
            </ListItemIcon>
            <ListItemText className={cs.listText}>
              <span>Settings</span>
            </ListItemText>
          </ListItem>
        </List>
      </IconContext.Provider>
    </div>
  );
};

DrawerComponent.propTypes = {
  modal: PropTypes.bool.isRequired,
};

function ResponsiveDrawer() {
  const cs = useStyles();
  const {
    state: { open },
    dispatch,
  } = useGlobalStore();

  return (
    <nav className={cs.drawer} aria-label="sidebar">
      <Hidden smDown implementation="js">
        {/* hide when its sm to xs */}
        <DrawerComponent modal={false} />
      </Hidden>
      <Hidden mdUp implementation="js">
        <Drawer
          open={open}
          onClose={() => dispatch(actionCreator(CLOSE))}
          PaperProps={{ className: cs.drawerList }}
        >
          <DrawerComponent modal={true} />
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default ResponsiveDrawer;
