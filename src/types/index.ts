export interface ISlidersCategoryItem {
  id: string;
  slideImg: string;
  productName: string;
  productDescription: string;
}

export interface IProduct {
  id: number | string;
  name?: string;
  description?: string;
  price: number;
  inStock?: boolean;
  isPopular?: boolean;
  color?: string;
  model?: string;
  storage?: string;
  quantity?: number;
  imgUrl: string;
}
export interface IUnifiedProduct {
  id: string | number;
  name?: string;
  description?: string;
  price: number;
  imgUrl: string;
  inStock?: boolean;
  isPopular?: boolean;
  color?: string;
  model?: string;
  storage?: string;
  quantity?: number;
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
