export interface ISlidersCategoryItem {
  id: string;
  slideImg: string;
  productName: string;
  productDescription: string;
}

export type CategoryType =
  | "Iphone"
  | "IPad"
  | "Smartphones"
  | "Accessories"
  | "IMac"
  | "AppleWatch";

export type ProductMap = {
  [key in CategoryType]?: IProduct[];
};

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

export interface IProductCategory {
  [key: string]: IProduct[];
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
export interface IState {
  products: {
    products: IProductCategory[];
  };
}
