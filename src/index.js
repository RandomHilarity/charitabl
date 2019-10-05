import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './components/styles/index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

const renderApp = () => {
    ReactDOM.render(
        <Router>
      <App />, 
      </Router>,
      root);
};

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
