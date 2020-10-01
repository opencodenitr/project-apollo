import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './SectionLayout';

function About() {
  const classes = useStyle();

  return (
    <SectionLayout alternate>
      <h1>About Section</h1>
    </SectionLayout>
  );
}

export default About;

const useStyle = makeStyles((theme) => ({}));
