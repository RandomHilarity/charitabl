import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

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
    flexDirection: "row"
  },
  text: {
    display: "flex"
  },
  content: {
    width: "100%",
  },
});

export default function User(props) {
  const classes = useStyles();

  let totalDonations = 0;
  let donationsForYear = 0;
  const date = new Date();
  const year = date.getFullYear().toString();
  
  const charities = props.donations.map(donation => {
    
    totalDonations += donation.amount_cents;

    if (donation.donated_at.substring(0, 4) === year) {
      donationsForYear += donation.amount_cents;
    }

    return (
      <main>
        <Card className={classes.card}>
          <CardActionArea>
            <div className={classes.details}>
              <CardMedia className={classes.media}>
                <img src={donation.logo} alt={donation.name} />
              </CardMedia>
              <CardContent className={classes.content}>
                <Grid className={classes.content} container spacing={3}>
                  <Typography xs={4}>
                    {donation.name}
                  </Typography>
                  <Typography xs={4}>
                  ${donation.amount_cents / 100}
                  </Typography>
                  <Typography xs={4}>{donation.donated_at}</Typography>
                </Grid>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </main>
    );
  });

  return (
    <section className="main">
      <Typography component="h4" variant="h4">
        Charities
      </Typography>
      <Typography>Donations This Year: ${donationsForYear /100}</Typography>
      <Typography>Total Donations: ${totalDonations /100}</Typography>
      <Grid container spacing={2} justifyContent='center'>
        <Button onClick={props.onSearch} >Search</Button>
        <Button onClick={props.onScan}>Scan</Button>
      </Grid>
      <Typography type="h5" variant="h5">Your Donations</Typography>
      <ul>{charities}</ul>
    </section>
  );
}
