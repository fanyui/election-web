import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Store from './store';
import IndexRoute from './router';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={Store}>
        <IndexRoute />
    </Provider>

, document.getElementById('root'));
registerServiceWorker();
