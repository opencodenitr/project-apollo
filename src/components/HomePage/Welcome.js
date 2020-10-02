import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './SectionLayout';

function Welcome({ onScrollClick }) {
  const classes = useStyle();

  return (
    <SectionLayout onScrollClick={onScrollClick}>
      <h1 className={classes.heading}>Welcome Section</h1>
    </SectionLayout>
  );
}

export default Welcome;

const useStyle = makeStyles((theme) => ({
  heading: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '3em',
  },
}));
