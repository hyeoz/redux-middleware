import { createAction } from "@reduxjs/toolkit";
import { handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = (requestType) =>
  createAction(
    START_LOADING,
    (requestType) => requestType // payload
  );

export const finishLoading = (requestType) =>
  createAction(FINISH_LOADING, (requestType) => requestType);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;