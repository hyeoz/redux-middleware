import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./apiSample";
import loading from "./loading";
import { all } from "@redux-saga/core/effects";

// rootReducer
const rootReducer = combineReducers({ counter, sample, loading });

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]); // all 은 여러 saga를 합쳐주는 역할
}

export default rootReducer;
