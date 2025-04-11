import { IProduct } from "../../types";

interface IProductsState {
  products: IProduct;
  productsByCategory: IProduct[];
}

export const getProductsSelector = (state: {
  products: IProductsState;
}): IProduct => state.products.products;

export const getProductsByCategorySelector = (state: {
  products: IProductsState;
}): IProduct[] => state.products.productsByCategory;
