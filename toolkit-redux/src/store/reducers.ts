import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
});

export default rootReducer;
