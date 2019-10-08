import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Donator from "./landing_donator";
import Charity from "./landing_charity";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5)
  },
  container: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Landing(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <p>
        Charitabl is dedicated to making donations as quick and secure as
        possible. So help can get to those that need it.
      </p>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Donator {...props} />
          </Grid>
          <Grid item xs={6}>
            <Charity {...props} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
