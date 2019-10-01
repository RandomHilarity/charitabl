import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

const provinces = [
    {
      value: 'Alberta',
      label: 'AB'
    },
    {
      value: 'British Columbia',
      label: 'BC'
    },
    {
      value: 'Manitoba',
      label: 'MB'
    },
    {
      value: 'New Brunswick',
      label: 'NB'
    },
    {
      value: 'Newfoundland',
      label: 'NL'
    },
    {
      value: 'Nova Scotia',
      label: 'NS'
    },
    {
      value: 'Ontario',
      label: 'ON'
    },
    {
      value: 'Northwest Territories',
      label: 'NT'
    },
    {
      value: 'Nunavut',
      label: 'NU'
    },
    {
      value: 'British Columbia',
      label: 'BC'
    },
    {
      value: 'Prince Edward Island',
      label: 'PE'
    },
    {
      value: 'Quebec',
      label: 'QC'
    },
    {
      value: 'Saskatchewan',
      label: 'SK'
    },
    {
      value: 'Yukon',
      label: 'YT'
    },
]

export default function Signup(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstName: 'Bob',  // change values to props
    lastName: 'Dole',
    address: '',
    city: '',
    province: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  return (
    <form className={classes.container}>
      <TextField
        id="firstName"
        label="First Name"
        className={classes.textField}
        value={values.firstName}
        onChange={handleChange('firstName')}
        magin="normal"
      />
      <TextField
        id="lastName"
        label="Last Name"
        className={classes.textField}
        value={values.lastName}
        onChange={handleChange('lastName')}
        magin="normal"
      />
      <TextField
        id="address"
        label="Address"
        className={classes.textField}
        value={values.address}
        onChange={handleChange('address')}
        magin="normal"
      />
      <TextField
        id="city"
        label="City"
        className={classes.textField}
        value={values.city}
        onChange={handleChange('city')}
        magin="normal"
      />
      <TextField
        id="filled-select-province"
        select
        label="Province"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('province')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your province"
        margin="normal"
        variant="filled"
      >
        {provinces.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}