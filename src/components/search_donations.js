import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    display: "flex",
    margin: 5
  },
  media: {
    width: 100,
    height: 100
  },
  details: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  text: {
    display: "flex"
  }
});

export default function SearchDonations(props) {
  const classes = useStyles();
  let totalDonations = 0;

  const donations = props.donations.map(donation => {

    totalDonations += donation.amount_cents

    return (
      <Card className={classes.card} maxWidth="sm">
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Typography component="h5" variant="h5" fullWidth>
                  {donation.first_name} {donation.last_name}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography component="p" fullWidth>
                  {donation.amount_cents}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography component="p" fullWidth>
                  {donation.donated_at}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
    );
  });

  return (
    <section>
      <Typography component="h4" variant="h4">
        Donations
      </Typography>
      <ul>{donations}</ul>
      <Typography component="h5" variant="h5">
          Total Donations: {totalDonations}
      </Typography>
    </section>
  );
}