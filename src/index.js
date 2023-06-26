import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App';

import * as serviceWorker from './serviceWorkerRegistration';

import { robotReducers, fetchRobotReducers } from './reducers';

import './index.css';

const rootReducer = combineReducers({robotReducers, fetchRobotReducers});
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.register();