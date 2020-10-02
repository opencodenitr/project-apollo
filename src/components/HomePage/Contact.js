import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './SectionLayout';

function Contact() {
  const classes = useStyle();

  return (
    <SectionLayout alternate lastSection>
      <h1 className={classes.heading}>Contact Section</h1>
    </SectionLayout>
  );
}

export default Contact;

const useStyle = makeStyles((theme) => ({
  heading: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '3em',
  },
}));
