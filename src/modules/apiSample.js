import { handleActions } from "redux-actions";
import * as api from "../lib/api";
// import createRequestThunk from "../lib/createRequestThunk";
import { call, put, takeLatest } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
// import { finishLoading, startLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";

// 액션타입 선언
// thunk 사용하기 위해 createAction 사용하지 않고 액션 타입부터 따로 선언
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USER = "sample/GET_USER";
const GET_USER_SUCCESS = "sample/GET_USER_SUCCESS";
const GET_USER_FAILURE = "sample/GET_USER-FAILURE";

// // thunk 함수 생성
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); // 요청 시작

//   try {
//     const res = await api.getPost(id);
//     // console.log("response data", res.data);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: res.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     }); // 에러 발생. 요청 실패
//     throw e; // 에러 넘겨주기
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USER }); // 요청 시작
//   try {
//     const res = await api.getUsers();
//     dispatch({
//       type: GET_USER_SUCCESS,
//       payload: res.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_USER_FAILURE,
//       payload: e,
//       error: true,
//     }); // 에러 발생. 요청 실패
//     throw e; // 에러 넘겨주기
//   }
// };

// 리팩토링
// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USER, api.getUsers);

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USER);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USER, api.getUsers);

// redux-saga
// function* getPostSaga(action) {
//   // 파라미터로 action 을 받아오면 액션의 정보를 조회할 수 있음
//   yield put(startLoading(GET_POST)); // 로딩 시작
//   try {
//     const post = yield call(api.getPost, action.payload); // Promise를 반환하는 함수를 호출. (함수, 함수에 넣을 인자)
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post.data,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
// }
// Unexpected "," 에러 다 지우고 다시 써보기
// function* getUsersSaga() {
//   yield put(startLoading(GET_USER));
//   try {
//     const users = yield call(api.getUsers);
//     yield put({
//       type: GET_USER_SUCCESS,
//       payload: users.data,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_USER_FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_USER));
// }
export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USER, getUsersSaga);
}

// 초기상태 선언
// 요청의 로딩 상태는 loading 이라는 객체에서 관리
const initialState = {
  // loading: {
  //   GET_POST: false,
  //   GET_USER: false,
  // },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    // [GET_POST]: (state) => ({
    //   ...state,
    //   // loading: {
    //   //   ...state.loading,
    //   //   GET_POST: true, // 포스트 요청 시작
    //   // },
    // }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      // loading: {
      //   ...state.loading,
      //   GET_POST: false, // 포스트 요청 로딩 끝
      // },
      post: action.payload,
    }),
    // [GET_POST_FAILURE]: (state, action) => ({
    //   ...state,
    //   // loading: {
    //   //   ...state.loading,
    //   //   GET_POST: false, // 포스트 요청 로딩 끝
    //   // },
    // }),
    // [GET_USER]: (state) => ({
    //   ...state,
    //   // loading: {
    //   //   ...state.loading,
    //   //   GET_USER: true,
    //   // },
    // }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      // loading: {
      //   ...state.loading,
      //   GET_USER: false,
      // },
      users: action.payload,
    }),
    // [GET_USER_FAILURE]: (state, action) => ({
    //   ...state,
    //   // loading: {
    //   //   ...state.loading,
    //   //   GET_USER: false,
    //   // },
    // }),
  },
  initialState
);

export default sample;
