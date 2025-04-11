import { createSlice } from "@reduxjs/toolkit";
import { listProduct } from "../../components/Category/constants";
import { IProduct, IProductCategory } from "../../types";
interface initialStateProps {
  products: IProductCategory;
  productsByCategory: IProduct[];
}
const initialState: initialStateProps = {
  products: listProduct,
  productsByCategory: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = { ...action.payload };
    },
    setProductsByCategory: (state, action) => {
      state.productsByCategory = [...action.payload];
    },
  },
});

export const { setProducts, setProductsByCategory } = productsSlice.actions;

export default productsSlice.reducer;
