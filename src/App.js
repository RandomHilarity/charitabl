import React from 'react';
import './App.css';
import Landing from "./components/landing"
import Header from "./components/layouts/header"
import Footer from "./components/layouts/footer"

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#95C623',
      contrastText: '#f2f2f2',
    },
    secondary: {
      main: '#0e4749'
    },
    error: {
      main: '#e55812'
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
