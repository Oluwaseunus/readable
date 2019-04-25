import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';

import store from './store';

import './index.scss';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
