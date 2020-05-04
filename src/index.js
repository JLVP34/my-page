import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Flow from './app/Flow';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Flow />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
