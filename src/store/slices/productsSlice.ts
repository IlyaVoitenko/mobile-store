import { createSlice } from "@reduxjs/toolkit";
import { listProduct } from "../../components/Category/constants";

const initialState = {
  products: listProduct.categories,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
