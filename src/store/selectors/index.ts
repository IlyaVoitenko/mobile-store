import { IProduct } from "../../types";

interface IProductsState {
  products: IProduct[];
}

export const getProductsSelector = (state: {
  products: IProductsState;
}): IProduct[] => state.products.products;
