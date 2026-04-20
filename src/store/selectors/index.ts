import {
  IProduct,
  initialStateProps,
  InitialBucket,
  IProductCategory,
  IFilter,
} from "../../types";
import { createSelector } from "@reduxjs/toolkit";

export const getProductsSelector = (state: {
  products: initialStateProps;
}): IProductCategory => state.products.products;
export const getSelectedProductSelector = (state: {
  products: initialStateProps;
}): IProduct => state.products.selectedProduct;

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

export const getCategoryProductsSelector = createSelector(
  [getProductsSelector, (_state: { products: initialStateProps }, category: string) => category],
  (products, category): IProduct[] => products[category] ?? []
);

export const getBucketProducts = (state: { bucket: InitialBucket }) =>
  state.bucket.bucket;
export const getTotalSumBucket = (state: { bucket: InitialBucket }) =>
  state.bucket.totalSumma;
