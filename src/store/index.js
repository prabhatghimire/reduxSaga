import {applyMiddleware, createStore, compose} from 'redux';
import {RootReducer} from './reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

// export const action = type => Store.dispatch({type});
