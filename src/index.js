import React from 'react';
import ReactDOM from 'react-dom';
import initEvents from './events';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

initEvents();
