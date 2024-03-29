import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';
import Mounika from "./mounika";
import appStore from "../src/mounika/redux/store"
console.log("ccccccccc",appStore.getState());
ReactDOM.render(
    <Provider  store={appStore}>
        <App  />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
