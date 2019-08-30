import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { createLogger } from "redux-logger";
import rootReducer from "./../reducers";

const initialState = {};

const loggerMiddleware = createLogger();
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware, loggerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
