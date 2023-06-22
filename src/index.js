import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import App from './containers/App';

import { robotReducers } from './reducers';

import './index.css';

const logger = createLogger();
const store = createStore(robotReducers, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);