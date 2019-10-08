import React from "react";
import { storiesOf } from "@storybook/react";

import App from "../App";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import Landing from "../components/landing";
import Donate from "../components/make_donation";
import SearchCharities from "../components/search_charities";
import UserSignup from "../components/user_signup";
import Thank from "../components/thank";
import User from "../components/user";
import UserLogin from "../components/user_login";
import Scanner from "../components/scanner";
import Failed from "../components/stripeForm_failed";

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
    qr_img_url: "https://i.imgur.com/M6yBwxS.png?1"
  }
];

const donationsUser = [
  {
    id: 1,
    name: "SlumDogs",
    amount_cents: 5000,
    donated_at: "2019-5-1",
    logo: "https://i.imgur.com/2E9aJiw.jpg"
  },
  {
    id: 3,
    name: "Feed Me",
    amount_cents: 10000,
    donated_at: "2019-6-2",
    logo: "https://i.imgur.com/2E9aJiw.jpg"
  }
];

storiesOf("App", module).add("App", () => <App />);

storiesOf("Components", module)
  .add("Footer", () => <Footer />)
  .add("Header", () => <Header />)
  .add("Landing", () => <Landing />)
  .add("User", () => <User donations={donationsUser} />)
  .add("Make Donation", () => <Donate charity={charities[0]} />)
  .add("Search Charities", () => <SearchCharities charities={charities} />)
  .add("User Login", () => <UserLogin />)
  .add("User Signup", () => <UserSignup />)
  .add("Thank", () => <Thank />)
  .add("CC Failed", () => <Failed />);

storiesOf("Scanner", module).add("Scan", () => <Scanner />);
