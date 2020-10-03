import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Welcome from '../../../components/HomePage/Welcome';
import About from '../../../components/HomePage/About';
import Focus from '../../../components/HomePage/Focus';
import Contact from '../../../components/HomePage/Contact';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders welcome section content', () => {
  act(() => {
    render(<Welcome />, container);
  });
  expect(container.textContent).toBe('Welcome Section');
});

it('renders about section content', () => {
  act(() => {
    render(<About />, container);
  });
  expect(container.textContent).toBe('About Section');
});

it('renders focus section content', () => {
  act(() => {
    render(<Focus />, container);
  });
  expect(container.textContent).toBe('Focus Section');
});

it('renders contact us section content', () => {
  act(() => {
    render(<Contact />, container);
  });
  expect(container.textContent).toBe('Contact Section');
});
