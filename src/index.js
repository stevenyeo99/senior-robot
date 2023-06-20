import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons';

import App from './containers/App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
  </div>
);