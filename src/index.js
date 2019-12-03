import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './componet/ToDo/ToDo';
import ToDos from './componet/ToDo/ToDos'
import * as serviceWorker from './service/serviceWorker';

ReactDOM.render(<ToDos />, document.getElementById('root'));
serviceWorker.unregister();
