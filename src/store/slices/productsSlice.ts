import { createSlice } from "@reduxjs/toolkit";
import { listProduct } from "../../components/Category/constants";
import { initialStateProps } from "../../types";

const initialState: initialStateProps = {
  products: listProduct,
  paginatedProducts: [],
  productFiltered: [],
  isLoading: false,
  selectedFilters: { model: [], storage: [], color: [], type: [] },
  priceRange: { minPrice: null, maxPrice: null },
  popularGoodsOption: "default",
  selectedProduct: {
    id: "",
    name: "",
    description: "",
    price: 0,
    inStock: false,
    isPopular: false,
    color: "",
    model: "",
    storage: "",
    quantity: 0,
    imgUrl: "",
    type: "",
    vendorCode: 0,
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = { ...action.payload };
    },
    setPopularGoodsOptionSelector: (state, action) => {
      state.popularGoodsOption = action.payload;
    },
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
    setPriceRangeGoods: (state, action) => {
      const { maxPrice, minPrice } = action.payload;
      state.priceRange = {
        minPrice,
        maxPrice,
      };
    },
  },
});

export const {
  setProducts,
  setPopularGoodsOptionSelector,
  setProductsByCategory,
  setProductsByFilter,
  setIsLoading,
  setSelectedProduct,
  setPriceRangeGoods,
  setSelectedFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
