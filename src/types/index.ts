export interface ISlidersCategoryItem {
  id: string;
  slideImg: string;
  productName: string;
  productDescription: string;
}
export interface IProductSection {
  id: string;
  priceProduct: number;
  descriptionProduct: string;
  imgProduct: string;
}
export interface IProduct {
  id: number | string;
  name: string;
  price: number;
  inStock: boolean;
  isPopular: boolean;
  storageOptions?: string[];
  selectedColor?: string;
  selectedModel?: string;
  selectedStorage?: string;
  quantity: number;
}
export interface IProductCategory {
  categories: {
    [key: string]: IProduct[];
  };
}
export interface IQueryData {
  nameClient: string;
  phoneNumber: string;
  success: boolean;
}
export interface IActionStateReducer<S> {
  (prevState: S, formData: FormData): S | Promise<S>;
}
export interface IFiltersProduct {
  models?: string[];
  memory?: string[];
  color?: string[];
  type?: string[];
}
