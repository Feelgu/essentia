import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import {apiMiddleware} from 'redux-api-middleware';
import rootReducer from './reducers';

const createHistory = require("history").createBrowserHistory;

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    apiMiddleware,
    routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer(history),
    initialState,
    composedEnhancers
);

export default store