import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import createBrowserHistory from '../history';
import Hello from './Hello';

const App = () => {
  return (
    <Router history={createBrowserHistory}>
      <Switch>
        <Route path='/' exact>
          <Hello />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
