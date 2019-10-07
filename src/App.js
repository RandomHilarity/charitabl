import React from "react";
import "./components/styles/App.css";

import Landing from "./components/landing";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import useVisualMode from "./hooks/useVisualMode";
import Donate from "./components/make_donation";
import SearchCharities from "./components/search_charities";
import SearchDonations from "./components/search_donations";
import UserSignup from "./components/user_signup";
import Thank from "./components/thank";
import User from "./components/user";
import UserLogin from "./components/user_login"
import Scanner from "./components/scanner"

import useApplicationData from "./hooks/useApplicationData";

import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

/*  Transition States
 *  ROOT - homepage
 *  USER - display user page
 *  USER_SIGNUP - displays user signup page
 *  SEARCH_CHARITY - search charity page
 *  QR - shows scanning window for QR code, will go to QR_NEXT after scan
 *  QR_NEXT - choice of login or signup, goes to DONATE or USER_SIGNUP respectively
 *  DONATE - shows page for making donation
 *  THANKS - shows page after making donation, link to USER
 */

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9bc53d",
      contrastText: "#f2f2f2"
    },
    secondary: {
      main: "#5bc0eb"
    },
    error: {
      main: "#c3423f"
    }
  }
});

const ROOT = "ROOT";
const USER = "USER";
const USER_SIGNUP = "USER_SIGNUP";
const USER_LOGIN = "USER_LOGIN";
const SEARCH_CHARITY = "SEARCH_CHARITY";
const DONATE = "DONATE";
const THANK = "THANK";
const QR_SCAN = "QR_SCAN"

function App() {
  const {
    state: { user, donations, charities, charity },
    setCharity,
    handleSignUp,
    handleLogin,
    makeDonation 
  } = useApplicationData();

  const visualMode = useVisualMode("ROOT")//user && user.id ? "USER" : "ROOT");
  const { mode, transition, back } = visualMode;

  console.log(mode, "MODE");
  console.log(user, "user state")
  console.log(donations, "donation state")
  console.log(charities, "charities")
  console.log(charity, "charity state")

  if (mode === "ROOT" && user && user.id) transition("USER");
  // update QR and QR_NEXT mode and states once QR added
  return (
    <ThemeProvider theme={theme}>
      <Header back={() => back()} />
      <Container maxWidth="lg">
        {mode === ROOT && <Landing {...visualMode} />}
        {mode === USER_SIGNUP && <UserSignup {...visualMode} onSubmit={handleSignUp} user={user}/>}
        {mode === USER_LOGIN && <UserLogin {...visualMode} onSubmit={handleLogin} user={user}/>}
        {mode === USER && (
          <User
            donations={donations}
            onSearch={() => transition("SEARCH_CHARITY")}
            onScan={() => transition("QR_SCAN")}
          />
        )}        
        {mode === SEARCH_CHARITY && (
          <SearchCharities
            charities={charities}
            setCharity={setCharity}
            onSelectCharity={() => transition("DONATE")}
          />
        )}
        {mode === QR_SCAN && (
          <Scanner
            charities={charities}
            setCharity={setCharity}
            onSelectCharity={() => transition("DONATE")} />
        )}
        {mode === DONATE && <Donate 
          {...visualMode}
          user={user} 
          charity={charity}
          makeDonation={makeDonation}
          toThankPage={() => transition("THANK")}/>}
        {mode === THANK && <Thank toUserPage={() => transition("USER")} />}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
