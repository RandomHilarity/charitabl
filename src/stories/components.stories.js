import React from 'react';
import { storiesOf } from "@storybook/react";

import App from "../App"
import Footer from "../components/layouts/footer"
import Header from "../components/layouts/header"
import Landing from "../components/landing"
import Donate from "../components/make_donation"
import SearchCharities from "../components/search_charities"
import SearchDonations from "../components/search_donations"
import UserSignup from "../components/user_signup"
import Thank from "../components/thank"
import User from "../components/user"
import UserLogin from "../components/user_login"
import Scanner from "../components/scan"

/* const users = [
  {
    id: 1,
    firstName: "Mickey",
    last_name: "Mouse",
    address: "100 Minnie Street",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    email: "mickeymouse@mail.com"
  },
  {
    id: 2,
    firstName: "Donald",
    last_name: "Duck",
    address: "200 Daisy Street",
    city: "Toronto",
    province: "Ontario",
    country: "Canada",
    email: "donaldduck@mail.com"
  }
] */

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
    logo: "https://i.imgur.com/2E9aJiw.jpg",
    qr_img_url: "https://i.imgur.com/M6yBwxS.png?1"
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
    logo: "https://i.imgur.com/2E9aJiw.jpg",
    qr_img_url: "https://i.imgur.com/M6yBwxS.png?1",
  }
]

/* const donations = [
  {
    id: 1,
    amount_cents: 5000,
    user_id: 1,
    charity_id: 1,
    employee_id: 1
  },
  {
    id: 2,
    amount_cents: 4000,
    user_id: 2,
    charity_id: 1,
    employee_id: 1
  },
] */

const donationsDisplay = [
  {
    id: 1,
    amount_cents: 5000,
    firstName: "Mickey",
    last_name: "Mouse",
    charity_id: 1,
    donated_at: "2019-4-2"
  },
  {
    id: 2,
    amount_cents: 4000,
    firstName: "Donald",
    last_name: "Duck",
    charity_id: 1,
    donated_at: "2019-4-2"
  },
]

const donationsUser = [
  {
    id: 1,
    name: "SlumDogs",
    amount_cents: 5000,
    donated_at: "2019-5-1",
    logo: "https://i.imgur.com/2E9aJiw.jpg",
  },
  {
    id: 3,
    name: "Feed Me",
    amount_cents: 10000,
    donated_at: "2019-6-2",
    logo: "https://i.imgur.com/2E9aJiw.jpg",
  }
]

storiesOf("App", module)
  .add("App", () => <App/>)

storiesOf("Components", module)
  .add("Footer", () => <Footer/>)
  .add("Header", () => <Header/>)
  .add("Landing", () => <Landing/>)
  .add("User", () => <User
    donations={ donationsUser }
    />
  )
  .add("Make Donation", () => <Donate
    charity={ charities[0] }
    />
  )
  .add("Search Charities", () => <SearchCharities
    charities={ charities }
    />
  )
  .add("Search Donations", () => <SearchDonations
    donations={ donationsDisplay }
     
    />
  )
  .add("User Login", () => <UserLogin/>)
  .add("User Signup", () => <UserSignup/>)
  .add("Thank", () => <Thank/>)

  storiesOf("Scanner", module)
    .add("Scan", () => <Scanner/>)