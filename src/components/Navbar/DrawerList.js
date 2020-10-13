import React from 'react';
import { connect } from 'react-redux';
import { Link as RouteLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { changeRoute } from '../../actions/route.action';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60vw',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItemText: {
    textAlign: 'right',
  },
}));

const DrawerList = ({ selectedRoute, changeRoute, toggleDrawer }) => {
  const classes = useStyles();

  const handleListItemClick = (event, index) => {
    changeRoute(index);
  };

  return (
    <div className={classes.root}>
      <List aria-label='main mailbox folders' onClick={toggleDrawer(false)}>
        <ListItem
          button
          selected={selectedRoute === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          component={RouteLink}
          to='/'
        >
          <ListItemText primary='HOME' className={classes.listItemText} />
        </ListItem>
        <ListItem
          button
          selected={selectedRoute === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          component={RouteLink}
          to='/skills'
        >
          <ListItemText primary='EVENTS' className={classes.listItemText} />
        </ListItem>
        <ListItem
          button
          selected={selectedRoute === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          component={RouteLink}
          to='/projects'
        >
          <ListItemText primary='PROJECTS' className={classes.listItemText} />
        </ListItem>
        <ListItem
          button
          selected={selectedRoute === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          component={RouteLink}
          to='/contact'
        >
          <ListItemText primary='TEAM' className={classes.listItemText} />
        </ListItem>
      </List>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedRoute: state.selectedRoute };
};

export default connect(mapStateToProps, { changeRoute })(DrawerList);
