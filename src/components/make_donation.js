import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const frequency = [
  { value: "D", label: "Daily" },
  { value: "W", label: "Weekly" },
  { value: "M", label: "Monthly" },
  { value: "Q", label: "Quarterly" },
  { value: "Y", label: "Yearly" }
];

const useStyles = makeStyles(theme => ({
  details: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
  },
  media: {
    width: 100,
    height: 100,
  },
  form: {
    width: "100%",
    margin: theme.spacing(1),
  },
  formField: {
    padding: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Donate(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedRecurring: false,
    frequency: ""
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div>
        <img className={classes.media} src={props.charity.logo} alt={props.charity.name} />
        <Typography component="h4" variant="h4">
          {props.charity.name}
        </Typography>
        <Typography component="p">{props.charity.long_description}</Typography>
        <div className={classes.details}>
        <form className={classes.form} noValidate>
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
            />
          </Grid>
          <Grid container spacing={2} align="center">
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedRecurring}
                    onChange={handleChange("checkedRecurring")}
                    value="checkedRecurring"
                  />
                }
                label="Recurring"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                autoComplete="frequency"
                variant="outlined"
                fullWidth
                name="frequency"
                label="Frequency"
                id="filled-select-frequency"
                value={state.frequency}
                onChange={handleChange("frequency")}
                select
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {frequency.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Donate
          </Button>
          </Grid>
        </form>
        </div>
      </div>
    </Container>
  );
}
