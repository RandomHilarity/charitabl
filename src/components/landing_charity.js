import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    textAlign: "center"
  },
  root: {
    justifyContent: "center"
  }
});

export default function Donor({ transition }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Charities
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Take, track and manage your donations. We'll handle the paperwork, you
          save the world.
        </Typography>
      </CardContent>
      <CardActions classes={{ root: classes.root }}>
        <Button
          className="button"
          size="small"
          color="primary"
          //onClick={() => transition("CHARITY_LOGIN")}  // NOT CURRENTLY IMPLEMENTED
        >
          LOGIN
        </Button>
        <Typography>|</Typography>
        <Button
          className="button"
          size="small"
          color="primary"
          //onClick={() => transition("CHARITY_SIGNUP")}  // NOT CURRENTLY IMPLEMENTED
        >
          Signup
        </Button>
      </CardActions>
    </Card>
  );
}
