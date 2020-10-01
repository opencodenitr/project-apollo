import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './SectionLayout';

function Focus({ onScrollClick }) {
  const classes = useStyle();

  return (
    <SectionLayout onScrollClick={onScrollClick}>
      <h1>Focus Section</h1>
    </SectionLayout>
  );
}

export default Focus;

const useStyle = makeStyles((theme) => ({}));
