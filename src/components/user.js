import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
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
  }
});

export default function User(props) {
  const classes = useStyles();

  const charities = props.donations.map(donation => {
    return (
        <main>
        <Typography>
            Donations This Year:
        </Typography>
        <Typography>
            Total Donations:
        </Typography>
        <Grid container spacing={2}>
        <Button>Search</Button>
        <Button>Scan</Button>
        </Grid>

      <Card className={classes.card}>
        <CardActionArea>
          <div className={classes.details}>
            <CardMedia className={classes.media}>
              <img src={donation.logo} alt={donation.name} />
            </CardMedia>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {donation.name}
              </Typography>
              <Typography component="p">{donation.long_description}</Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
      
      </main>
    );
  });

  return (
    <section>
      <Typography component="h4" variant="h4">Charities</Typography>
      <ul>{charities}</ul>
    </section>
  );
}
