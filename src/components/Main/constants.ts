import { nanoid } from "nanoid";
import { ISlidersCategoryItem } from "../../types";

import categorySliderIphone from "../../assets/categorySliderIphone.svg";

export const slidersCategory: ISlidersCategoryItem[] = [
  {
    id: nanoid(),
    slideImg: categorySliderIphone,
    productName: "Iphone 11 pro ",
    productDescription: "Modern. Stylish. Beautiful",
  },
  {
    id: nanoid(),
    slideImg: categorySliderIphone,
    productName: "Iphone 12 ",
    productDescription: "Modern. Stylish. Beautiful",
  },
  {
    id: nanoid(),
    slideImg: categorySliderIphone,
    productName: "Iphone 13 ",
    productDescription: "Modern. Stylish. Beautiful",
  },
  {
    id: nanoid(),
    slideImg: categorySliderIphone,
    productName: "Iphone 14 pro ",
    productDescription: "Modern. Stylish. Beautiful",
  },
];
