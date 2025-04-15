import { createSlice } from "@reduxjs/toolkit";
import { listProduct } from "../../components/Category/constants";
import { initialStateProps } from "../../types";

const initialState: initialStateProps = {
  products: listProduct,
  paginatedProducts: [],
  productFiltered: [],
  isLoading: false,
  selectedFilters: { model: [], storage: [], color: [], type: [] },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedFilters: (state, action) => {
      state.selectedFilters = { ...action.payload };
    },
    setProducts: (state, action) => {
      state.products = { ...action.payload };
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setProductsByCategory: (state, action) => {
      state.paginatedProducts = [...action.payload];
    },
    setProductsByFilter: (state, action) => {
      state.productFiltered = [...action.payload];
    },
  },
});

export const {
  setProducts,
  setProductsByCategory,
  setProductsByFilter,
  setIsLoading,
  setSelectedFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
