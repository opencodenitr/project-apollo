import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';
import App from './views/App';

import './index.css';

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.querySelector('#root')
);
