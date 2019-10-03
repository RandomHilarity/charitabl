import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';

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

export default function Search(props) {
  const classes = useStyles();

  const charities = props.charities.map(charity => {
    return (
      <Card className={classes.card}>
        <CardActionArea onClick={props.onSelectCharity}>
          <div className={classes.details}>
            <CardMedia className={classes.media}>
              <img src={charity.logo} alt={charity.name} />
            </CardMedia>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {charity.name}
              </Typography>
              <Typography component="p">{charity.long_description}</Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    );
  });

  return (
    <section>
      <Typography component="h4" variant="h4">Charities</Typography>
      <ul>{charities}</ul>
    </section>
  );
}
