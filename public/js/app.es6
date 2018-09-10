import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/store.es6';
import ConnectedComponent from './components/connectedComponenet.es6';
// import Login from './components/login.es6';
// import Review from './components/review.es6';
// import { Router, Route } from "react-router";



ReactDOM.render(
    <Provider store={store}>
        <ConnectedComponent />
    </Provider>
    , document.getElementById("root"));
