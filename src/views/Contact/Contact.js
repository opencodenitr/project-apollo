import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Facebook from "./images/Facebook.svg";
import Github from "./images/Github.svg";
import Instagram from "./images/Instagram.svg";
import Slack from "./images/Slack.png";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#0f3057",
  },
  heading1: {
    paddingLeft: "37%",
    paddingTop: "10%",
  },
  heading2: {
    paddingLeft: "30%",
  },
  root: {
    display: "flex",
    paddingLeft: "41%",
    paddingRight: "41%",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  input: {
    paddingLeft: "30%",
    paddingRight: "30%",
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <h1 className={classes.heading1}>Stay Connected With OpenCode</h1>
      <div className={classes.root}>
        <Avatar alt="F">
          <a href="https://www.facebook.com/OpenCodeCommunity/">
            <img width="100%" height="100%" src={Facebook} alt="F" />
          </a>
        </Avatar>
        <Avatar alt="G">
          <a href=" https://github.com/opencodenitr">
            <img width="100%" height="100%" src={Github} alt="G" />
          </a>
        </Avatar>
        <Avatar alt="I">
          <a href="https://www.instagram.com/opencode.nitr/">
            <img width="100%" height="100%" src={Instagram} alt="I" />
          </a>
        </Avatar>
        <Avatar alt="S">
          <a href="http://bit.ly/NITRDevs">
            <img width="100%" height="100%" src={Slack} alt="M" />
          </a>
        </Avatar>
      </div>
      <h1 className={classes.heading2}>
        Please provide any comments or suggestions below!
      </h1>
      <div className={classes.input}>
        <TextField
          id="outlined-textarea"
          label="Email:"
          placeholder="Enter you email here!"
          multiline
          fullWidth
          margin="normal"
          variant="outlined"
        />
        ​
        <TextField
          id="outlined-textarea"
          label="Comments:"
          placeholder="Please enter your comments here!"
          multiline
          fullWidth
          margin="normal"
          variant="outlined"
        />
        ​
        <Button
          onClick={() => alert("Thanks for the feedback")}
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
