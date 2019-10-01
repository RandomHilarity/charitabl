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

storiesOf("Components", module)
  .add("All", () => <App/>)
  .add("Footer", () => <Footer/>)
  .add("Header", () => <Header/>)
  .add("Landing", () => <Landing/>)
  .add("Make_Donation", () => <Donation/>)
  .add("Search", () => <Search/>)
  .add("Signup", () => <Signup/>)
  .add("Thank", () => <Thank/>)