import { nanoid } from "nanoid";
import { SlidersCategoryItem } from "../../types";

import categorySliderIphone from "../../assets/categorySliderIphone.svg";

export const slidersCategory: SlidersCategoryItem[] = [
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
