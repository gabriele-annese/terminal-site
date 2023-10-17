import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/global.css';
import App from './App';
import *  as Constants from './components/Constants';
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(Constants.AsciiLogo);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
