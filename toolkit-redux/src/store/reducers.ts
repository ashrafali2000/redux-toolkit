import { combineReducers } from "@reduxjs/toolkit";
import apiReducer from "./slices/apiSlice";

const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;
