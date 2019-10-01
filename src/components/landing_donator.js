import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 200,
    minHeight: 200,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 12
  },
});

const action = function() {
  console.log("Pressed a button! Placeholder")
};

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.text} onClick={()=>action()}>
      <CardActionArea>
        <CardContent>
          <Typography className="h3" color="textSecondary">
          I'm a donator!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}