import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel'

import { homepage } from '../../assets/placeholder';
import SectionLayout from './SectionLayout';

const data = homepage.focus.data;

function Focus({ onScrollClick }) {
  const classes = useStyle();

  return (
    <SectionLayout onScrollClick={onScrollClick}>
      <div className={classes.root}>
        <Grid container direction='row' justify='center' alignItems='center' spacing={5}>
          {/* Section Heading */}
          <Grid item xs={12}>
            <h1 className={classes.heading}>Our Focus</h1>
          </Grid>

          {/* Carousel */}
          <Grid item xs={12} md={6} style={{margin:'0 auto'}}>
            <Carousel 
              className={classes.carousel} 
              interval='10000' 
              navButtonsAlwaysVisible
              animation="slide"
            >
              {data.map((section) => (
                <Card className={classes.card} style={{background: section.background}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={section.caption}
                      height="100%"
                      image={section.img}
                      title={section.caption}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {section.caption}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card> 
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </div>
    </SectionLayout>
  );
}

export default Focus;

const useStyle = makeStyles((theme) => ({
  heading: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '3em',
  },
  root: {
    flexGrow: 1,
    paddingTop: theme.mixins.toolbar.minHeight,
    textAlign: 'center',
    width: '100%',
    height: '95vh',
    backgroundColor: theme.palette.background.darkgrey,
    paddingBottom: '5rem',
  },
  card: {
    width: '70%',
    height: '70%',
    margin: '0 auto',
  },
  carousel: {
    maxwidth: 400,
  },
}));
