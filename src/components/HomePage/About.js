import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { homepage } from '../../assets/placeholder';
import SectionLayout from './SectionLayout';

const data = homepage.about.data;

function About({ onScrollClick }) {
  const classes = useStyle();

  return (
    <SectionLayout alternate onScrollClick={onScrollClick}>
      <div className={classes.root}>
        <Grid container direction='row' justify='center' alignItems='center' spacing={5}>
          {/* Section Heading */}
          <Grid item xs={12}>
            <h1 className={classes.heading}>About OpenCode</h1>
          </Grid>

          {data.map((section) => (
            <Grid
              className={classes.subsection}
              direction={section.direction}
              justify='center'
              alignItems='center'
              container
              spacing={8}
            >
              <Grid item sm={12} md={6}>
                <h1>{section.title}</h1>
                <p className={classes.textbody}>{section.content}</p>
              </Grid>
              <Grid item sm={12} md={6}>
                <img className={classes.image} src={section.img} alt='Team' />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </SectionLayout>
  );
}

export default About;

const useStyle = makeStyles((theme) => ({
  heading: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '3em',
    textAlign: 'center',
  },
  textbody: {
    textAlign: 'justify',
  },
  root: {
    flexGrow: 1,
    paddingTop: theme.mixins.toolbar.minHeight,
    textAlign: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.darkgrey,
    paddingBottom: '5rem',
  },
  image: {
    width: '90%',
  },
  subsection: {
    padding: '2rem 10rem 10rem',
  },
}));
