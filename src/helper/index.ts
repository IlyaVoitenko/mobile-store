import { SetStateAction } from "react";
import { customAlphabet } from "nanoid";
import {
  IQueryData,
  IActionStateReducer,
  IPriceRange,
  IProduct,
  FilterKey,
  Filters,
} from "../types";
import { setProductsByFilter } from "../store/slices/productsSlice.ts";
import { redirect } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";

//imitation fetch query
export const queryClient: IActionStateReducer<IQueryData> = async (
  _,
  queryData
) => {
  const nameClient = queryData?.get("nameClient") as string;
  const phoneNumber = queryData?.get("phoneNumber") as string;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    nameClient,
    phoneNumber,
    success: true,
  };
};
//checking is valid the client number
export const handleValidClientName = (
  target: EventTarget & HTMLInputElement,
  setNameClient: {
    (value: SetStateAction<string>): void;
    (arg0: string): void;
  }
) => {
  const clientNameRegex = /^[a-zA-Z]+$/;
  const { value } = target;
  if (!clientNameRegex.test(value)) return;
  setNameClient(value);
};
//checking is valid the client email
export const handleValidEmail = (
  target: EventTarget & HTMLInputElement,
  setState: {
    (value: SetStateAction<string>): void;
    (arg0: string): void;
  }
) => {
  const emailRegex = /(?<=\s)\w+@\w+\.(?:com|net)/;
  const { value } = target;
  const isEmail = emailRegex.test(value);

  if (isEmail) setState(value);
};
//checking is valid the client feedback

export const handleValidFeedback = (
  target: EventTarget & HTMLInputElement,
  setState: {
    (value: SetStateAction<string>): void;
    (arg0: string): void;
  }
) => {
  const feedbackRegex = /[^A-Za-z 0-9]/g;
  const { value } = target;
  const isFeedback = feedbackRegex.test(value);

  if (isFeedback) setState(value);
};
//checking is valid the client number
export const handleValidClientNumber = (
  target: EventTarget & HTMLInputElement,
  setState: {
    (value: SetStateAction<string>): void;
    (arg0: string): void;
  }
) => {
  const clientPhoneNumberRegex = /^\+?\d{0,15}$/;
  const { value } = target;
  const isPhone = clientPhoneNumberRegex.test(value);

  if (isPhone) setState(value);
};
//render previous slider
export const handlePreSlider = (
  currentSlideNumber: number,
  setCurrentSlideNumber: {
    (value: SetStateAction<number>): void;
  }
) => {
  if (currentSlideNumber < 1) return;
  setCurrentSlideNumber(currentSlideNumber);
};
//render next slider
export const handleNextSlider = (
  currentSlideNumber: number,
  setCurrentSlideNumber: {
    (value: SetStateAction<number>): void;
  },
  amountSliders: number
) => {
  if (currentSlideNumber > amountSliders) return;
  setCurrentSlideNumber(currentSlideNumber);
};
//rendering filters by category
export const filtersProductsByCategory = (
  category: string | undefined
): Filters | void => {
  switch (category) {
    case "Iphone":
      return {
        model: [
          "13 Pro Max",
          "13 Pro",
          "12 Pro Max",
          "12 Pro ",
          "12",
          "11 Pro Max",
          "11 Pro ",
          "11",
        ],
        storage: ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"],
        color: ["Red", "Black", "Blue", "Yellow", "Green"],
      };
    case "IPad":
      return {
        model: ["Pro", "Air", "Mini"],
        storage: ["128 GB", "256 GB", "512 GB", "1 TB"],
        color: ["Red", "Black", "Blue", "Yellow", "Green"],
      };
    case "Apple Watch":
      return {
        model: ["Series 7", "SE", "Series 3"],
        storage: ["64 GB", "128 GB"],
      };
    case "IMac":
      return {
        model: ["Pro", "Air", "Mini"],
        storage: ["256 GB", "512 GB", "1 TB"],
        color: ["Black", "Blue", "Green"],
      };
    case "Android Smartphones":
      return {
        model: ["Samsung", "Xiaomi", "Huawei", "Oppo", "Vivo"],
        storage: ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"],
        color: ["Red", "Black", "Blue", "Yellow", "Green"],
      };
    case "Accessories":
      return {
        color: ["Red", "Black", "Blue", "Yellow", "Green"],
        model: ["Case", "Screen Protector", "Charger", "Headphones"],
      };
    default:
      redirect("/");
  }
};
//checking whether the filter is in use.
export const handleIsCheckedFilter = (
  target: HTMLInputElement,
  setState: React.Dispatch<React.SetStateAction<Filters>>,
  filter: keyof Filters
) => {
  const name = target.name;
  const isChecked = target.checked;
  setState((prev: Filters) => {
    const currentFilter = prev[filter] ?? [];

    if (isChecked) {
      return {
        ...prev,
        [filter]: [...currentFilter, name],
      };
    } else {
      return {
        ...prev,
        [filter]: currentFilter.filter((item) => item !== name),
      };
    }
  });
};
// move a btn 'apply filters' to selected filter
export const handlePositionBtnApplyFilters = (
  target: HTMLInputElement,
  setPositionApplyBtn: React.Dispatch<React.SetStateAction<number>>,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  const inputRect = target.getBoundingClientRect();
  const containerRect = containerRef.current?.getBoundingClientRect();

  if (containerRect) {
    const inputTop = inputRect.top + inputRect.height / 2;
    const containerTop = containerRect.top;
    const containerHeight = containerRect.height;

    const percent = ((inputTop - containerTop) / containerHeight) * 100;
    setPositionApplyBtn(percent);
  }
};
//render amount pages by amount goods for pagination component
export const handleReducerPaginationPages = (
  paginationPages: number,
  currentPage: number
) => {
  const list = Array.from({ length: paginationPages }, (_, index) => index + 1);

  const prevPage = currentPage - 2;
  const nextPage = currentPage + 1;

  if (currentPage < 3) return list.slice(0, 3);
  if (currentPage > paginationPages - 2)
    return list.slice(paginationPages - 3, paginationPages);

  const reducedList = list.slice(prevPage, nextPage);
  return reducedList;
};
//filtering array by filters that using a user
export const handleFilteringGoodsBySelectedCategories = (
  products: IProduct[],
  selectedFilters: Filters
): IProduct[] => {
  return products?.filter((product: IProduct) => {
    return Object.entries(selectedFilters).every(([key, values]) => {
      if (values.length === 0) return true;

      return values.includes(product[key as FilterKey] as string);
    });
  });
};
//returning array by price range chosen the user
export const handleFilterGoodsByPriceRange = (
  list: IProduct[],
  priceRange: IPriceRange
) => {
  const { maxPrice, minPrice } = priceRange;
  if (!maxPrice || !minPrice) return list;
  return list.filter(
    (item) => item.price <= maxPrice && item.price >= minPrice
  );
};
//filtering array by popularity and unpopularity
export const handleFilterGoodsByPopular = (
  list: IProduct[],
  popular: string
) => {
  if (popular === "Popular") {
    return list.filter((item) => item.isPopular === true);
  }
  if (popular === "Unpopular") {
    return list.filter((item) => item.isPopular === false);
  }
};
// event Applying filters
export const handleApplySelectedFilters = (
  productsSelector: IProduct[],
  selectedFilters: Filters,
  priceRangeSelector: IPriceRange,
  dispatch: Dispatch,
  popular: string = "default"
) => {
  const products: IProduct[] = productsSelector ?? [];
  const filteredListGoods = handleFilteringGoodsBySelectedCategories(
    products,
    selectedFilters
  );

  const filteredByPriceRange = handleFilterGoodsByPriceRange(
    filteredListGoods,
    priceRangeSelector
  );
  //selected user a filter by popularity
  if (popular === "Popular") {
    const popularGoods = handleFilterGoodsByPopular(
      filteredByPriceRange,
      popular
    );
    if (!popularGoods?.length) alert("Goods not found");

    return dispatch(setProductsByFilter(popularGoods));
  }
  //selected user a filter by unpopularity
  if (popular === "Unpopular") {
    const unpopularGoods = handleFilterGoodsByPopular(
      filteredByPriceRange,
      popular
    );
    if (!unpopularGoods?.length) alert("Goods not found");

    return dispatch(setProductsByFilter(unpopularGoods));
  }
  return dispatch(setProductsByFilter(filteredByPriceRange));
};
//if filters are unused , render list goods without filters
export const handleShowDefaultListGoods = (
  productsSelector: IProduct[],
  selectedFilters: Filters,
  dispatch: Dispatch
) => {
  const products: IProduct[] = productsSelector ?? [];
  const filteredListGoods = handleFilteringGoodsBySelectedCategories(
    products,
    selectedFilters
  );
  return dispatch(setProductsByFilter(filteredListGoods));
};
//finding out min and max price value of goods
export const minAndMaxPriceListGoods = (
  listGoods: IProduct[]
): IPriceRange | void => {
  if (listGoods.length === 0) return;

  return {
    initialMinPrice: Math.min(
      ...listGoods.map((item: { price: number }) => item.price)
    ),
    initialMaxPrice: Math.max(
      ...listGoods.map((item: { price: number }) => item.price)
    ),
  };
};
//generation a Vendor Code for every goods
export const generateVendorCode = (): number => {
  const vendorCode = customAlphabet("1234567890", 5);
  const res = vendorCode();
  return +res;
};
