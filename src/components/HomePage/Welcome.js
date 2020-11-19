import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import SectionLayout from './SectionLayout';
import { ReactComponent as ReactSvgImg } from '../../assets/bulb.svg';

function Welcome({ onScrollClick }) {
  const classes = useStyle();

  return (
    <SectionLayout onScrollClick={onScrollClick}>
      
      
      {/*---the svg image (bulb)---*/}
      
      <Grid
        container
        xs={12}
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.svgContainer}
      >
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <ReactSvgImg />
        </Grid>
      </Grid>

      {/*----- Text ----- */}

      <Grid
        container
        xs={12}
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.textContainer}
      >
        <Grid item xs={12}>
          <Typography gutterBottom variant='h2'>
            WELCOME TO
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant='h1'>
            OPENCODE
          </Typography>
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

    '& svg': {
      width: '600px',
      height: '500px',
      [theme.breakpoints.down('sm')]: {
        width: '480px',
        height: '400px',
      },
      [theme.breakpoints.down('xs')]: {
        width: '340px',
        height: '300px',
      },
    },
  },

  textContainer: {
    fontFamily: theme.typography.fontFamily,
    color: 'white',

    '& h2': {
      [theme.breakpoints.up('sm')]: {
        letterSpacing: '.5.0rem',
      },
      [theme.breakpoints.up('md')]: {
        letterSpacing: '1.0rem',
      },

      fontWeight: '700',
      mixBlendMode: 'difference',
    },

    '& h1': {
      color: 'black',
      [theme.breakpoints.up('sm')]: {
        letterSpacing: '1.0rem',
      },
      [theme.breakpoints.up('md')]: {
        letterSpacing: '2.0rem',
      },

      fontWeight: '700',
      WebkitTextStroke: '1px whitesmoke',
      textShadow: '1px 1px 0px #e3e3e3',
      mixBlendMode: 'screen',
    },
  },
}));
