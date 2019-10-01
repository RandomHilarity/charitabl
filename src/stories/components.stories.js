import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import App from "../App"
import Footer from "../components/layouts/footer"
import Header from "../components/layouts/header"
import Landing from "../components/landing"
import Donation from "../components/make_donation"
import Search from "../components/search"
import Signup from "../components/signup"
import Thank from "../components/thank"

const users = [
  {
    id: 1,
    first_name: "Mickey",
    last_name: "Mouse",
    address: "100 Minnie Street",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    email: "mickeymouse@mail.com"
  },
  {
    id: 2,
    first_name: "Donald",
    last_name: "Duck",
    address: "200 Daisy Street",
    city: "Toronto",
    province: "Ontario",
    country: "Canada",
    email: "donaldduck@mail.com"
  }
]

const charities = [
  {
    id: 1,
    name: "SlumDogs",
    address: "101 Dalmations Lane",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    short_description: "We look after dogs",
    long_description: "We look after dogs long_desc",
    qr_img_url: "placeholder"
  },
  {
    id: 2,
    name: "Feed Me",
    address: "2 Meals on Wheels Rd",
    city: "Vancouver",
    province: "British Columbia",
    country: "Canada",
    short_description: "We deliver food to seniors",
    long_description: "We deliver food to seniors long_desc",
    qr_img_url: "placeholder",
  }
]

const donations = [
  {
    id: 1,
    amount_cents: 5000,
    user_id: 1,
    charity_id: 1,
    employee_id: 1
  },
  {
    id: 1,
    amount_cents: 4000,
    user_id: 1,
    charity_id: 2,
    employee_id: 1
  },
  {
    id: 2,
    amount_cents: 10000,
    user_id: 2,
    charity_id: 1,
    employee_id: 2
  }
]

storiesOf("App", module)
  .add("App", () => <App/>)

storiesOf("Components", module)
  .add("Footer", () => <Footer/>)
  .add("Header", () => <Header/>)
  .add("Landing", () => <Landing/>)
  .add("Make_Donation", () => <Donation/>)
  .add("Search", () => <Search/>)
  .add("Signup", () => <Signup/>)
  .add("Thank", () => <Thank/>)