import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Donator from './landing_donator'
import Charity from './landing_charity'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div class="main">
      <section>
        <p>
        Charitabl is dedicated to making donations as quick and secure as possible.  So help can get to those that need it.
        </p>
      </section>
      <div className={classes.root} class="navy">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Donator/>
          </Grid>
          <Grid item xs={6}>
            <Charity/>
          </Grid>
        </Grid>
      </div>
    </div>
  )}