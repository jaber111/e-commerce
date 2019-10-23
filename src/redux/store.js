import {createStore, combineReducers, applyMiddleware,compose} from "redux";
import createSagaMiddleware from 'redux-saga'

import * as Reducers from '../reducers';
import Sagas from '../sagas';




const rootReducer = combineReducers(Reducers)
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(
    rootReducer,
composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);
// run the saga
sagaMiddleware.run(Sagas);

export default store;
