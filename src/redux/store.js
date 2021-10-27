import { compose, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";

const store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

    )
)

export default store;