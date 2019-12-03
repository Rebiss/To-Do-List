import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './componet/ToDo/ToDo';
import * as serviceWorker from './service/serviceWorker';

ReactDOM.render(<ToDo />, document.getElementById('root'));
serviceWorker.unregister();
