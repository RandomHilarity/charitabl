import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";

const provinces = [
  { value: "Alberta", label: "AB" },
  { value: "British Columbia", label: "BC" },
  { value: "Manitoba", label: "MB" },
  { value: "New Brunswick", label: "NB" },
  { value: "Newfoundland", label: "NL" },
  { value: "Nova Scotia", label: "NS" },
  { value: "Northwest Territories", label: "NT" },
  { value: "Nunavut", label: "NU" },
  { value: "Ontario", label: "ON" },
  { value: "Prince Edward Island", label: "PE" },
  { value: "Quebec", label: "QC" },
  { value: "Saskatchewan", label: "SK" },
  { value: "Yukon", label: "YT" }
];

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://charitabl.netlify.com/">
        Charitabl
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp({ transition, onSubmit, user }) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    province: "",
    email: "",
    password: ""
  });

  if (user && user.id) {
    transition("USER");
    return null;
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={e => (e.preventDefault(), onSubmit(values))}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange("first_name")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange("last_name")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange("password")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Street Address"
                type="address"
                id="address"
                autoComplete="current-address"
                onChange={handleChange("address")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="city"
                name="city"
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                autoFocus
                onChange={handleChange("city")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="province"
                variant="outlined"
                fullWidth
                name="province"
                label="Province"
                id="filled-select-province"
                value={values.province}
                onChange={handleChange("province")}
                select
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {provinces.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={() => transition("USER_LOGIN")} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
