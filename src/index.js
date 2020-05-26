import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Flow from './app/Flow';
import * as serviceWorker from './serviceWorker';

import './app/i18n/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Flow />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
