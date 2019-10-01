import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        minHeight: 200,
        minWidth: 200,
    },
    text: {
      fontSize: 32,
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
      <Card className={classes.card} onClick={()=>action()}>
        <CardActionArea>
          <CardContent>
            <Typography className={classes.text}>
            I'm a charity!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }