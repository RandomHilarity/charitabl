import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import StripeForm from "./stripeForm";

const useStyles = makeStyles(theme => ({
  details: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
    width: "100%"
  },
  media: {
    width: 100,
    height: 100,
    marginTop: 20
  },
  form: {
    width: "100%",
    margin: theme.spacing(1)
  },
  formField: {
    padding: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Donate(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    errorMessage: "",
    amount: ""
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div>
        <img
          className={classes.media}
          src={props.charity.logo}
          alt={props.charity.name}
        />
        <Typography component="h4" variant="h4">
          {props.charity.name}
        </Typography>
        <Typography component="p">{props.charity.long_description}</Typography>
        <div className={classes.details}>
          <Grid item xs={12}>
            <TextField
              autoComplete="amount"
              name="amount"
              variant="outlined"
              required
              fullWidth
              id="amount"
              label="Donation Amount"
              autoFocus
              onChange={handleChange("amount")}
            />
            .00
          </Grid>
          <StripeForm
            user={props.user}
            handleResult={props.makeDonation}
            amount={state.amount}
            charity={props.charity}
            toThankPage={props.toThankPage}
            toErrorPage={props.toErrorPage}
            back={props.back}
          />
        </div>
      </div>
    </Container>
  );
}
