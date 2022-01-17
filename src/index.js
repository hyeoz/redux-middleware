// import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import App from "./App";
import ReduxThunk from "redux-thunk";
import rootReducer, { rootSaga } from "./modules/index.js";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, ReduxThunk, sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

// const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
