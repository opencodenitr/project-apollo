import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import GitHubIcon from '@material-ui/icons/GitHub';
//import FacebookIcon from '@material-ui/icons/Facebook';
//import InstagramIcon from '@material-ui/icons/Instagram';
import Instagram from './Social_media/insta.png';
import GitHub from './Social_media/git.png';
import Facebook from './Social_media/fb.png';
import Slack from './Social_media/slack.png';


import SectionLayout from './SectionLayout';

function Contact() {
  const classes = useStyle();

  return (
    <SectionLayout alternate lastSection>
      <Grid container className={classes.background}>
        
  {/*   <Grid item xs={12}>


        </Grid> */}      

        <Grid item xs={12} md={6} className={classes.item}>

          <h1>Stay in touch.</h1>

          <Grid
            container
            direction="row"
            justify="center"
            spacing={10}
          >

          <Grid item>
            <a href="https://m.facebook.com/OpenCodeCommunity/">
              <img src={Facebook} alt='icon' />
            </a>
          </Grid>

          <Grid item>
            <a href="https://github.com/opencodenitr" >
              <img src={GitHub} alt='icon'/>
            </a>
          </Grid>

          <Grid item>
            <a href="https://www.instagram.com/opencode.nitr/" >
              <img src={Instagram} alt='icon'/>
            </a>
          </Grid>

          <Grid item>
            <a href="http://bit.ly/NITRDevs">
              <img src={Slack} alt='icon'/>
            </a>
          </Grid>

          </Grid>

        </Grid>

        <Grid item xs={12} md={6} className={classes.item}>
        
          <h2>A feedback would be appreciated.</h2>

          <div>  
          <TextField
            id="outlined-textarea"
            placeholder="Email: "
            multiline
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-textarea"
            placeholder="Comments: "
            multiline
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Button onClick={()=>alert('Thanks for the feedback')} variant="contained" color="secondary">
            Submit
          </Button>  
          </div>

        </Grid>

      </Grid>
    </SectionLayout>
  );
}

export default Contact;

const useStyle = makeStyles((theme) => ({
  background: {
    backgroundColor: "#0E1647",
    height: "100%",
    width: "100%",
    paddingTop: "10%",
  },
  item: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
}));
