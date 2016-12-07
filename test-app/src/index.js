import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TimerExample from './TimerExample';
import './index.css';

ReactDOM.render(
  <div>
    <App />
    <TimerExample startTime={Date.now()} />,
  </div>,
  document.getElementById('root')
);
