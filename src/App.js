import React from 'react';
import './components/styles/App.css';
import Landing from "./components/landing"
import Header from "./components/layouts/header"
import Footer from "./components/layouts/footer"
import useVisualMode from "./hooks/useVisualMode"

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
      main: '#9bc53d',
      contrastText: '#f2f2f2',
    },
    secondary: {
      main: '#5bc0eb'
    },
    error: {
      main: '#c3423f'
    }
  }
});

function App(props) {

  const { mode, transition, back } = useVisualMode(
    props
  )

  return (
    <ThemeProvider theme={ theme }>
    <Header/>

    <Landing/>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
