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
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Thank(props) {
  const classes = useStyles();

  return (
    <section className={classes.main}>
      <Typography className={classes.title}>Donation Failed</Typography>
      <Typography className={classes.subtext}>
        The transaction was not completed. Either your card was declined or
        there was a server error.
      </Typography>
      <Button
        width="50%"
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={props.back}
      >
        Try Again
      </Button>
    </section>
  );
}
