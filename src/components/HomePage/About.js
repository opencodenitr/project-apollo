import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Team from './imgs/team.svg';
import Work from './imgs/github.svg';
import WebDev from './imgs/web_dev.svg';
import AppDev from './imgs/app_dev.svg';
import OpenSource from './imgs/open_source.svg';
import Competitive from './imgs/competitive.svg';
import Hackathon from './imgs/hackathon.svg';
import Ai from './imgs/ai.svg';


import SectionLayout from './SectionLayout';

function About({ onScrollClick }) {
  const classes = useStyle();

  return (
    <SectionLayout alternate onScrollClick={onScrollClick}>
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
          {/* Section Heading */}
          <Grid item xs={12}>
            <h1 className={classes.heading}>About OpenCode</h1>
          </Grid>

          {/*Who we are section*/}
          <Grid className={classes.subsection} direction="row" justify="center" alignItems="center" container spacing={8}>
            <Grid item sm={12} md={6}>
            <h1>Who are we?</h1>
            <p className={classes.textbody}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
               in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Grid>
            <Grid item sm={12} md={6}>
              <img className={classes.image} src={Team} alt="Team" />
            </Grid>
          </Grid>

          {/*What we do section*/}
          <Grid className={classes.subsection} direction="row-reverse" justify="center" alignItems="center" container spacing={8}>
            <Grid item sm={12} md={6}>
            <h1>What we do?</h1>
            <p className={classes.textbody}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
               in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Grid>
            <Grid item sm={12} md={6}>
              <img className={classes.image} src={Work} alt="Work" />
            </Grid>
          </Grid>

          {/* Our Specializations */}
          <Grid item xs={12}>
              <h1>Our Specializations</h1>
          </Grid>

          {/* Open Source */}
          <Grid className={classes.subsection} justify="center" alignItems="center" container spacing={8}>
            <Grid item sm={12} md={6}>
              <h1>Open Source</h1>
              <p className={classes.textbody}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Grid>
            <Grid item sm={12} md={6}>
              <img className={classes.image} src={OpenSource} alt="Open Source" />
            </Grid>
          </Grid>
          
          {/* Web Development */}
          <Grid className={classes.subsection} direction="row-reverse" justify="center" alignItems="center" container spacing={8}>
            <Grid item sm={12} md={6}>
              <h1>Web Development</h1>
              <p className={classes.textbody}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Grid>
            <Grid item sm={12} md={6}>
              <img className={classes.image} src={WebDev} alt="Web Development" />
            </Grid>
          </Grid>

          {/* App Development */}
          <Grid className={classes.subsection} justify="center" alignItems="center" container spacing={8}>
            <Grid item sm={12} md={6}>
              <h1>App Development</h1>
              <p className={classes.textbody}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Grid>
            <Grid item sm={12} md={6}>
              <img className={classes.image} src={AppDev} alt="App Development" />
            </Grid>
          </Grid>
          
          {/* Competitive Programming */}
          <Grid className={classes.subsection} direction="row-reverse" justify="center" alignItems="center" container spacing={8}>
            <Grid item sm={12} md={6}>
              <h1>Competitive Programming</h1>
              <p className={classes.textbody}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Grid>
            <Grid item sm={12} md={6}>
              <img className={classes.image} src={Competitive} alt="Competitive Programming" />
            </Grid>
          </Grid>

          {/* Hackathons */}
          <Grid className={classes.subsection} justify="center" alignItems="center" container spacing={8}>
            <Grid item sm={12} md={6}>
              <h1>Hackathons</h1>
              <p className={classes.textbody}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Grid>
            <Grid item sm={12} md={6}>
              <img className={classes.image} src={Hackathon} alt="Hackathon" />
            </Grid>
          </Grid>

          {/* AI */}
          <Grid className={classes.subsection} direction="row-reverse" justify="center" alignItems="center" container spacing={8}>
            <Grid item sm={12} md={6}>
              <h1>ML & AI</h1>
              <p className={classes.textbody}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Grid>
            <Grid item sm={12} md={6}>
              <img className={classes.image} src={Ai} alt="ML & AI" />
            </Grid>
          </Grid>
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
    textAlign:'justify',
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
