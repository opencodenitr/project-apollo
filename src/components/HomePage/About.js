import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

function Home() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <h1>About Section</h1>
    </Container>
  );
}

export default Home;

const useStyle = makeStyles((theme) => ({
  container: {
    height: '90vh',
    padding: theme.spacing(0, 1),
    backgroundColor: 'blue',
    paddingTop: theme.mixins.toolbar.minHeight,
  },
}));
