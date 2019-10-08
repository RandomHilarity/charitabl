import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  container: {
    margin: "auto",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    marginTop: 25
  },
  card: {
    maxWidth: 600,
    minWidth: 320,
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

export default function SearchCharities(props) {
  const classes = useStyles();

  const charities = props.charities.map((charity, index) => {
    const setCharityAndTransition = function() {
      props.setCharity(charity);
      props.onSelectCharity();
    };

    return (
      <Card className={classes.card} key={index}>
        <CardActionArea onClick={setCharityAndTransition}>
          <div className={classes.details}>
            <CardMedia className={classes.media}>
              <img src={charity.logo} alt={charity.name} />
            </CardMedia>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {charity.name}
              </Typography>
              <Typography component="p">{charity.short_description}</Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    );
  });

  return (
    <section className={classes.container}>
      <Typography component="h4" variant="h4">
        Charities
      </Typography>
      {charities}
    </section>
  );
}
