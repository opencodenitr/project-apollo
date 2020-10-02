import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './SectionLayout';

function Focus({ onScrollClick }) {
  const classes = useStyle();

  return (
    <SectionLayout onScrollClick={onScrollClick}>
      <h1 className={classes.heading}>Focus Section</h1>
    </SectionLayout>
  );
}

export default Focus;

const useStyle = makeStyles((theme) => ({
  heading: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '3em',
  },
}));
