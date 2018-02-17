/* eslint-disable */

/**
 * STORE.JS
 *
 * The Redux store / Application state
 *
 * Gets the reducers and applies middleware here.
 */
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import MainReducer from "./reducers/index";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
    const { logger } = require("redux-logger");

    middlewares.push(logger);
}

middlewares.push(thunkMiddleware, promiseMiddleware);

const store = compose(applyMiddleware(...middlewares))(createStore)(MainReducer);

export default store;
