import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import App from './views/App';

// import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();