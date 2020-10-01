import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function SectionLayout({ children, lastSection, onScrollClick, alternate }) {
  const classes = useStyle();

  return (
    <Container
      className={classes.container}
      style={{ backgroundColor: alternate ? 'red' : 'blue' }}
    >
      {children}
      {lastSection ? null : (
        <KeyboardArrowDownIcon
          className={classes.chevronDown}
          onClick={onScrollClick}
        />
      )}
    </Container>
  );
}

export default SectionLayout;

const useStyle = makeStyles((theme) => ({
  container: {
    height: '90vh',
    padding: theme.spacing(0, 1),
    paddingTop: theme.mixins.toolbar.minHeight,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevronDown: {
    position: 'absolute',
    bottom: 10,
  },
}));
