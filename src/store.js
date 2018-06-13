import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const logger = createLogger();
const Store = createStore(
    Reducer,
        applyMiddleware(thunk, logger)
    );


// );

export default Store;
