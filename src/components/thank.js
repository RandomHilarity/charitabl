import React from "react";
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

export default function Thank(props) {

  const classes = useStyles();

  return (
    <section className={classes.main}>
      <Typography className={classes.title}>Thank you for your donation!</Typography>
      <Typography className={classes.subtext}>You've made the world a better place.</Typography>
      <Button onPress={() => this.props.navigation.navigate('User')}>
        Continue
        </Button>
    </section>
  );
}
