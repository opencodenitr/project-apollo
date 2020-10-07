import React from 'react';

import { useScrollTrigger } from '@material-ui/core';
import PropTypes from 'prop-types';

import {
  Grid,
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import TemporaryDrawer from './TemporaryDrawer';
import CustomTabs from './CustomTabs';

const useStyles = makeStyles((theme) => ({
  appbar: {
    alignItems: 'center',
    background: theme.palette.background.default,
    display: 'flex',
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Container className={classes.container}>
            <Grid container justify='space-between' className={classes.grid}>
              <Box display='flex' className={classes.icon}>
                <Button>
                  <HomeRoundedIcon fontSize='large' color='primary' />
                </Button>
              </Box>
              <Box
                display={{ xs: 'flex', md: 'none' }}
                className={classes.icon}
              >
                <TemporaryDrawer />
              </Box>
              <Box
                display={{ xs: 'none', md: 'flex' }}
                className={classes.icon}
              >
                <CustomTabs />
              </Box>
            </Grid>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

export default Navbar;
