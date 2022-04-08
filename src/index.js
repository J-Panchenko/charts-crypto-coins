import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import App from './components/app';
import store from './store';
import './index.css';

const container = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);
