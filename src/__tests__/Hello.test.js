// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';

// import Hello from '../views/Hello';

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it('renders the welcome message', () => {
//   act(() => {
//     render(<Hello />, container);
//   });
//   expect(container.textContent).toBe('Welcome to Project-Apollo');
// });
