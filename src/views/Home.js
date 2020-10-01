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

  const scrollToRef = (ref) => {
    // window.scrollTo(0, ref.current.offsetTop);
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container className={classes.container}>
      <div ref={welcomeRef}>
        <Welcome onScrollClick={() => scrollToRef(aboutRef)} />
      </div>
      <div ref={aboutRef}>
        <About onScrollClick={() => scrollToRef(focusRef)} />
      </div>
      <div ref={focusRef}>
        <Focus onScrollClick={() => scrollToRef(contactRef)} />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </Container>
  );
}

export default Home;

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 1),
  },
}));
