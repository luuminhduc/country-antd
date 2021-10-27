import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import rootSaga from "./sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)

sagaMiddleware.run(rootSaga);

export default store;