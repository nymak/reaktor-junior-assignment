import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

import beanieReducer from './reducers/beanieReducer'
import facemaskReducer from './reducers/facemaskReducer'
import gloveReducer from './reducers/gloveReducer'

const reducer = combineReducers({
    beanies: beanieReducer,
    facemaskReducer: facemaskReducer,
    gloveReducer: gloveReducer
})

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

