import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import { addTokenToLocalStorage } from './actions/actions';
import rootReducer from './reducers/reducer';

const store = createStore(
    rootReducer,
    applyMiddleware(addTokenToLocalStorage, thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);