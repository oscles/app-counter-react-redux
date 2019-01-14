import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import registerServiceWorker from './registerServiceWorker';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] natural store', store.getState());
            const result = next(action);
            console.log('[Middleware] next state:',store.getState());
            return result;
        }
    }
};

// allowing redux extension
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(logger, thunk)),
    /*
    this is used when there aren't middleware
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    */
);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
