import { nanoid } from "nanoid";
import { ISlidersCategoryItem } from "../../types";
import resources from "./resources";
export const slidersCategory: ISlidersCategoryItem[] = [
  {
    id: nanoid(),
    slideImg: resources.categorySliderIphone,
    productName: "Iphone 11 pro ",
    productDescription: "Modern. Stylish. Beautiful",
  },
  {
    id: nanoid(),
    slideImg: resources.categorySliderIphone,
    productName: "Iphone 12 ",
    productDescription: "Modern. Stylish. Beautiful",
  },
  {
    id: nanoid(),
    slideImg: resources.categorySliderIphone,
    productName: "Iphone 13 ",
    productDescription: "Modern. Stylish. Beautiful",
  },
  {
    id: nanoid(),
    slideImg: resources.categorySliderIphone,
    productName: "Iphone 14 pro ",
    productDescription: "Modern. Stylish. Beautiful",
  },
];
