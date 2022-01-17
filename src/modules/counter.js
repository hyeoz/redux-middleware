// import { createReducer } from "@reduxjs/toolkit";
import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

// redux-saga 사용
function* increaseSaga() {
  yield delay(1000); // 1초 기다림
  yield put(increase()); // 특정 액션을 디스패치함
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga); // takeEvery 는 모든 액션에 대해 특정 작업 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); // takeLatest 는 기존에 진행중이던 작업이 있다면 취소처리하고 가장 마지막으로 실행된 작업만 수행
}

const initialState = 0;

// redux-thunk 사용
// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000); /// 1초뒤 실행되도록
// };
// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;

// // toolkit
// export const counter = createReducer(0, {
//   [INCREASE]: (state) => state + 1,
//   [DECREASE]: (state) => state - 1,
// });

// +) select 사가 내부에서 현재상태를 참조해야 하는 상황
// +) throttle 을 takeEvery 대신 사용하면 사가가 실행되는 주기를 제한할 수 있음
