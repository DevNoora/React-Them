import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'normalize.css/normalize.css';
import { ThemeContextProvider } from './contexts/ThemeContext.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
