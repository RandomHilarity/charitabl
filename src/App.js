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

import useApplicationData from "./hooks/useApplicationData";

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

function App() {
  const {
    state: { user, donations, charities }
  } = useApplicationData();

  const ROOT = "ROOT";
  const USER = "USER";
  const USER_SIGNUP = "USER_SIGNUP";
  const SEARCH_CHARITY = "SEARCH_CHARITY";
  const DONATE = "DONATE";
  const THANK = "THANK";

  const visualMode = useVisualMode(user ? "USER" : "ROOT");
  const { mode, transition, back } = visualMode;
  // update QR and QR_NEXT mode and states once QR added
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {mode === ROOT && <Landing {...visualMode} />}
      {mode === USER && <User 
        donations={donations}
        onSearch={() => transition("SEARCH_CHARITIES")}
        onScan={() => transition("QR")}
        />}
      {mode === USER_SIGNUP && <UserSignup {...visualMode} />}
      {mode === SEARCH_CHARITY && <SearchCharities
        charities={charities}
        onSelectCharity={() => transition("DONATE")}
        />}
      {mode === "QR"}
      {mode === "QR_NEXT"}
      {mode === DONATE && <Donate {...visualMode} />}
      {mode === THANK && <Thank 
        toUserPage={() => transition("USER")}
        />}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
