import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import registerServiceWorker from './registerServiceWorker';


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
