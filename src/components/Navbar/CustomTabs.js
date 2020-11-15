import React from 'react';
import { connect } from 'react-redux';
import { Link as RouteLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs } from '@material-ui/core';

import { changeRoute } from '../../actions/route.action';

const useStyles = makeStyles((theme) => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
  tab: {
    textTransform: 'none',
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(14),
    '&:focus': {
      opacity: 1,
    },
  },
  tabs: {
    minWidth: 120,
    width: 120,
  },
}));

const CustomTabs = ({ selectedRoute, changeRoute }) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    changeRoute(newValue);
  };

  return (
    <div>
      <Tabs
        value={selectedRoute}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          children: <span />,
        }}
        classes={{
          indicator: classes.indicator,
        }}
      >
        <Tab
          className={classes.tab}
          classes={{ root: classes.tabs }}
          disableRipple
          label='HOME'
          component={RouteLink}
          to='/'
        />
        <Tab
          className={classes.tab}
          classes={{ root: classes.tabs }}
          disableRipple
          label='EVENTS'
          component={RouteLink}
          to='/events'
        />
        <Tab
          className={classes.tab}
          classes={{ root: classes.tabs }}
          disableRipple
          label='PROJECTS'
          component={RouteLink}
          to='/projects'
        />
        <Tab
          className={classes.tab}
          classes={{ root: classes.tabs }}
          disableRipple
          label='TEAM'
          component={RouteLink}
          to='/team'
        />
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedRoute: state.selectedRoute };
};

export default connect(mapStateToProps, { changeRoute })(CustomTabs);
