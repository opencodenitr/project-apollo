import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import createBrowserHistory from '../config/history';
import Home from './Home';
import Navbar from '../components/Navbar';

import theme from '../config/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={createBrowserHistory}>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
