import {
  IProduct,
  initialStateProps,
  IProductCategory,
  IFilter,
} from "../../types";

export const getProductsSelector = (state: {
  products: initialStateProps;
}): IProductCategory => state.products.products;
export const getSelectedProductSelector = (state: {
  products: initialStateProps;
}): IProduct => state.products.selectedProduct;

export const getPaginatedProductsSelector = (state: {
  products: initialStateProps;
}): IProduct[] => state.products.paginatedProducts;

export const getProductsByFilterSelector = (state: {
  products: initialStateProps;
}): IProduct[] => state.products.productFiltered;

export const getIsLoadingSelector = (state: {
  products: initialStateProps;
}): boolean => state.products.isLoading;

export const getSelectedFiltersSelector = (state: {
  products: initialStateProps;
}): IFilter => state.products.selectedFilters;

export const getPriceRangeSelector = (state: { products: initialStateProps }) =>
  state.products.priceRange;

export const getIsPopularGoods = (state: { products: initialStateProps }) =>
  state.products.popularGoodsOption;
