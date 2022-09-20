import {
    combineReducers,
    compose,
    legacy_createStore
} from 'redux';

import priceReducer from './priceReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

function configureStore() {
    return legacy_createStore(
        combineReducers({
            priceState: priceReducer
        }),
        undefined,
        compose(ReactReduxDevTools)
    );
}

export default configureStore