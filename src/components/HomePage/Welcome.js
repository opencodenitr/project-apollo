import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './SectionLayout';

function Welcome() {
  const classes = useStyle();

  return (
    <SectionLayout>
      <h1>Welcome Section</h1>
    </SectionLayout>
  );
}

export default Welcome;

const useStyle = makeStyles((theme) => ({}));
