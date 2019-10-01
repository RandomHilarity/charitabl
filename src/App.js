import React from 'react';
import './components/styles/App.css';
import Landing from "./components/landing"
import Header from "./components/layouts/header"
import Footer from "./components/layouts/footer"

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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

function App() {
  return (
    <ThemeProvider theme={ theme }>
    <Header/>
    <Landing/>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
