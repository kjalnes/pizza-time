import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const reducers = combineReducers({ cart: cartReducer });
let store;

if (reduxDevtools) {
    store = createStore(reducers, reduxDevtools());
} else {
    store = createStore(reducers);
}

export default store;
