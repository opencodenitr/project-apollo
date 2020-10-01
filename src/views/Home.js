import React, { useRef } from 'react';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// Components
import About from '../components/HomePage/About';
import Contact from '../components/HomePage/Contact';
import Focus from '../components/HomePage/Focus';
import Welcome from '../components/HomePage/Welcome';

function Home() {
  const classes = useStyle();
  const welcomeRef = useRef();
  const aboutRef = useRef();
  const focusRef = useRef();
  const contactRef = useRef();

  return (
    <Container className={classes.container}>
      <Welcome ref={welcomeRef} />
      <About ref={aboutRef} />
      <Focus ref={focusRef} />
      <Contact ref={contactRef} />
    </Container>
  );
}

export default Home;

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 1),
  },
}));
