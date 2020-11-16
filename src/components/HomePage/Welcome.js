import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import SectionLayout from './SectionLayout';
import { ReactComponent as ReactSvgImg } from '../../assets/bulb.svg';

function Welcome({ onScrollClick }) {
  const classes = useStyle();

  return (
    <SectionLayout onScrollClick={onScrollClick}>
      <Grid container>
        {/*---the svg image (bulb)---*/}
        <Grid
          item
          xs={12}
          container
          className={classes.svgContainer}
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <ReactSvgImg width='600px' height='500px' />
          </Grid>
        </Grid>

        {/*----- Text ----- */}

        <Grid
          item
          xs={12}
          container
          className={classes.textContainer}
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography gutterBottom variant='h2'>
              WELCOME TO
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography gutterBottom variant='h1'>
              <div className={classes.line}>OPENCODE</div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </SectionLayout>
  );
}

export default Welcome;

const useStyle = makeStyles((theme) => ({
  svgContainer: {
    position: 'absolute',
    top: '0',
    height: '100%',
  },
  textContainer: {
    fontFamily: theme.typography.fontFamily,
    alignSelf: 'center',

    '& h2': {
      fontSize: '2.5rem',
      lineHeight: '4.2rem',
      letterSpacing: '1.2rem',
      fontWeight: '700',
      mixBlendMode: 'difference',
    },

    '& h1': {
      color: 'black',
      fontSize: '3rem',
      lineHeight: '4.2rem',
      letterSpacing: '3rem',
      fontWeight: '700',
      WebkitTextStroke: '1px whitesmoke',
      textShadow: '1px 1px 0px #e3e3e3',
      mixBlendMode: 'screen',
    },
  },
}));
