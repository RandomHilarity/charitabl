import React from "react";
import "./styles/scan.css"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    marginTop: theme.spacing(3)
  },
  subtext: {
    margin: theme.spacing(3, 0, 2)

  }
}));

//PLACEHOLDER FOR SCAN COMPONENT

export default function Thank(props) {

  const classes = useStyles();

  return (
    <section className={classes.main}>
      <span>
      <input type="text" className="qrcode.text"/>
      <label className="qrcode-text-btn">
      <input 
        type="file"
        accept="image/*"
        capture="environment"
        tabindex="-1"/>
      </label>
      </span>
      
{/*       <Typography className={classes.title}>Thank you for your donation!</Typography>
      <Typography className={classes.subtext}>You've made the world a better place.</Typography>
      <Button onClick={props.toUserPage}>
        Continue
        </Button> */}
    </section>
  );
}
