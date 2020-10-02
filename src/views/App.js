import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import createBrowserHistory from '../history';
import Hello from './Hello';
import Navbar from './Navbar';

import theme from '../theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={createBrowserHistory}>
        <Switch>
          <Navbar />
          <Route path='/' exact>
            <Hello />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
