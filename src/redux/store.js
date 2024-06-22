// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer';
import serviceSaga from './serviceSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddleware]
    }
);

sagaMiddleware.run(serviceSaga)
export default store;