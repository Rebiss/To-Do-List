import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './componet/App';
import * as serviceWorker from './service/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
