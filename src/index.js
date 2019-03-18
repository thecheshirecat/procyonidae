import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Procyonidae from './containers/Procyonidae';
import * as serviceWorker from './serviceWorker';

import { procyonidaeReducer } from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(procyonidaeReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Procyonidae />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
