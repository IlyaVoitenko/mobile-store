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
export type FilterKey = "model" | "storage" | "color" | "type";

export type Filters = {
  [key in FilterKey]?: string[];
};
export interface IProduct {
  id: number | string;
  name?: string;
  description?: string;
  price: number;
  inStock: boolean;
  isPopular?: boolean;
  color?: string;
  model?: string;
  storage?: string;
  quantity?: number;
  imgUrl: string;
  type?: string;
  vendorCode: number;
}

export interface IProductCategory {
  [key: string]: IProduct[];
}

export interface IState {
  products: {
    products: IProductCategory[];
  };
}

export interface IFilter {
  model?: string[];
  storage?: string[];
  color?: string[];
  type?: string[];
}
export interface IPriceRange {
  minPrice?: number | null;
  maxPrice?: number | null;
  initialMinPrice?: number | null;
  initialMaxPrice?: number | null;
}
export interface NewProductToBucket extends IProduct {
  number: number;
}
export interface initialStateProps {
  products: IProductCategory;
  paginatedProducts: IProduct[];
  productFiltered: IProduct[];
  selectedFilters: IFilter;
  isLoading: boolean;
  priceRange: IPriceRange;
  popularGoodsOption: string;
  selectedProduct: IProduct;
}
export interface DataClient {
  name: string;
  surname: string;
  phone: string;
  address: string;
}
export interface InitialBucket {
  bucket: NewProductToBucket[];
  totalSumma: number;
  typeDelivery: string;
  typePayment: string;
  addressClient: string;
  dataClient: DataClient;
}
export interface ApplyFilterArgs {
  productsByFilterSelector: IProduct[];
  selectedFilters: string[];
}
export interface IPostReviews {
  id: string;
  userName: string;
  amountStars: number;
  dateCreated: string;
  message: string;
  email: string;
}
export interface FormNeedHelp {
  nameClient: string;
  phoneNumber: string;
}
export interface IReviewPostValues {
  clientName: string;
  feedback: string;
  email: string;
}
export interface CheckOutForm {
  name: string;
  surname: string;
  numberPhone: number;
  address: string;
}
