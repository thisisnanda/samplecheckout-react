import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import checkoutReducer from '../reducers/checkoutReducer.es6';

const store = createStore(checkoutReducer, applyMiddleware(thunk));

export default store;
