import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import App from './common/App';

const AppReactRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<AppReactRouter />, document.getElementById('root'));
registerServiceWorker();
