import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    display: "flex",
    margin: 5,
    minWidth: "xs",
    justifyContent: "center",
  },
  media: {
    width: 100,
    height: 100
  },
  details: {
    display: "flex",
    flexDirection: "row"
  },
  button: {
    margin: 5,
    display: "flex",
    minWidth: 100,
  },
  content: {
    width: "100%",
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    padding: 20,
  },
  textContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  mainContainer: {
    justifyContent: 'center',
    padding: 20,
    maxWidth: "md",
  }
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
                  <Grid item>
                    <Typography xs={12} sm={8} content="h5" variant="h5">
                    {donation.name}
                  </Typography>
                  </Grid>
                  <Grid item>
                  <Typography xs={6} sm={2}>
                  ${donation.amount_cents / 100}
                  </Typography>
                  </Grid>
                  <Grid item>
                  <Typography xs={6} sm={2}>{donation.donated_at}</Typography>
                </Grid>
                </Grid>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </main>
    );
  });

  return (
    <Container className="mainContainer">
      <Box className={classes.textContainer}>
      <Typography>Donations This Year: ${donationsForYear /100}</Typography>
      <Typography>Total Donations: ${totalDonations /100}</Typography>
      </Box>
      <Divider variant="middle" />
      <Grid container spacing={2} className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained" color="secondary" onClick={props.onSearch} >Search</Button>
        <Button className={classes.button} variant="contained" color="secondary" onClick={props.onScan}>Scan</Button>
      </Grid>
      <Divider variant="middle" />
      <Typography type="h5" variant="h5">Your Donations</Typography>
      <ul>{charities}</ul>
    </Container>
  );
}
