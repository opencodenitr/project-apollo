import React from 'react';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button } from '@material-ui/core';

import DrawerList from './DrawerList';

const useStyles = makeStyles((theme) => ({
  div: {
    width: 200,
  },
  list: {
    '&:focus': {
      opacity: 1,
    },
  },
  listItem: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(14),
  },
  fullList: {
    width: 'auto',
  },
}));

const TemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)} className={classes.button}>
          <MenuRoundedIcon fontSize='large' color='primary' />
        </Button>
        <Drawer anchor='right' open={state} onClose={toggleDrawer(false)}>
          <DrawerList toggleDrawer={toggleDrawer} />
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
