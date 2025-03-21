import { combineReducers } from "@reduxjs/toolkit";
import bucketSlice from "../slices/bucketSlice";
import productsSlice from "../slices/productsSlice";

const rootReducer = combineReducers({
  products: productsSlice,
  bucket: bucketSlice,
});

export default rootReducer;
