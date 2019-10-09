import React from "react";
import "./components/styles/App.css";

import Landing from "./components/landing";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import useVisualMode from "./hooks/useVisualMode";
import Donate from "./components/make_donation";
import SearchCharities from "./components/search_charities";
import UserSignup from "./components/user_signup";
import Thank from "./components/thank";
import User from "./components/user";
import UserLogin from "./components/user_login"
import Scanner from "./components/scanner"
import Failed from "./components/stripeForm_failed"

import useApplicationData from "./hooks/useApplicationData";

import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

/*  Transition States
 *  ROOT - homepage
 *  USER - display user page
 *  USER_SIGNUP - displays user signup page
 *  SEARCH_CHARITY - search charity page
 *  QR - shows scanning window for QR code
 *  DONATE - shows page for making donation
 *  THANK - shows page after making donation, link to USER
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
const CC_FAILED = "CC_FAILED"
const QR_SCAN = "QR_SCAN"

function App() {
  const {
    state: { user, donations, charities, charity },
    setCharity,
    handleSignUp,
    handleLogin,
    makeDonation 
  } = useApplicationData();

  const visualMode = useVisualMode(ROOT)
  const { mode, transition, back } = visualMode;

  if (mode === ROOT && user && user.id) transition(USER);
    return (
    <ThemeProvider theme={theme}>
      <Header back={() => back()} />
      <Container maxWidth="lg" height="100%">
        {mode === ROOT && <Landing {...visualMode} />}
        {mode === USER_SIGNUP && <UserSignup {...visualMode} onSubmit={handleSignUp} user={user}/>}
        {mode === USER_LOGIN && <UserLogin {...visualMode} onSubmit={handleLogin} user={user}/>}
        {mode === USER && (
          <User
            donations={donations}
            onSearch={() => transition(SEARCH_CHARITY)}
            onScan={() => transition(QR_SCAN)}
          />
        )}        
        {mode === SEARCH_CHARITY && (
          <SearchCharities
            charities={charities}
            setCharity={setCharity}
            onSelectCharity={() => transition(DONATE)}
          />
        )}
        {mode === QR_SCAN && (
          <Scanner
            charities={charities}
            setCharity={setCharity}
            onSelectCharity={() => transition(DONATE)} />
        )}
        {mode === DONATE && <Donate 
          {...visualMode}
          user={user} 
          charity={charity}
          makeDonation={makeDonation}
          toThankPage={() => transition(THANK)}
          toErrorPage={() => transition(CC_FAILED)} />}
        {mode === THANK && <Thank toUserPage={() => transition(USER)} />}
        {mode === CC_FAILED && <Failed back={() => back()} />}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
