import { nanoid } from "nanoid";
import { generateVendorCode } from "../../helper";
import { IProduct } from "../../types";

import colorsCaseApple from "../../assets/colorsCaseApple.svg";
import caseApple from "../../assets/caseApple.svg";
import appleScreens from "../../assets/appleScreens.svg";
import samsungScreens from "../../assets/samsungScreens.svg";

export const arrProduct: IProduct[] = [
  {
    id: nanoid(),
    price: 5,
    name: "Silicone case overlay Original iPhone Silicone Case for iPhone 6 / 6s / 7 / 8 / Plus / X",
    imgUrl: colorsCaseApple,
    inStock: true,
    vendorCode: generateVendorCode(),
  },
  {
    id: nanoid(),
    price: 1,
    name: "Ultra-thin case for iPhone 5s/6/6s/7",
    imgUrl: caseApple,
    inStock: true,
    vendorCode: generateVendorCode(),
  },
  {
    id: nanoid(),
    price: 3,
    name: "HOCO Cool Radian Series (HD) 3D Shockproof Protective Glass for iPhone 6 / 6s / 7 / 8 / X / 11 / 12 / 13 / Plus / 16 ",
    imgUrl: samsungScreens,
    inStock: true,
    vendorCode: generateVendorCode(),
  },
  {
    id: nanoid(),
    price: 4,
    name: "HOCO Cool Zenith Series (HD) 3D Shockproof Glass Screen Protector for iPhone 6 / 6s / 7 / 8 / X / Plus...",
    imgUrl: appleScreens,
    inStock: true,
    vendorCode: generateVendorCode(),
  },
  {
    id: nanoid(),
    price: 3,
    name: "Silicone case overlay Original iPhone Silicone Case for iPhone 6 / 6s / 7 / 8 / Plus / X",
    imgUrl: colorsCaseApple,
    inStock: true,
    vendorCode: generateVendorCode(),
  },
  {
    id: nanoid(),
    price: 3,
    name: "Ultra-thin case for iPhone 5s/6/6s/7",
    imgUrl: caseApple,
    inStock: true,
    vendorCode: generateVendorCode(),
  },
  {
    id: nanoid(),
    price: 4,
    name: "HOCO Cool Radian Series (HD) 3D Shockproof Protective Glass for iPhone 6 / 6s / 7 / 8 / X / 11 / 12 / 13 / Plus / 16 ",
    imgUrl: samsungScreens,
    inStock: true,
    vendorCode: generateVendorCode(),
  },
  {
    id: nanoid(),
    price: 3,
    name: "HOCO Cool Zenith Series (HD) 3D Shockproof Glass Screen Protector for iPhone 6 / 6s / 7 / 8 / X / Plus",

    imgUrl: appleScreens,
    inStock: true,
    vendorCode: generateVendorCode(),
  },
  {
    id: nanoid(),
    price: 5,
    name: "Silicone case overlay Original iPhone Silicone Case for iPhone 6 / 6s / 7 / 8 / Plus / X",
    imgUrl: colorsCaseApple,
    inStock: true,
    vendorCode: generateVendorCode(),
  },
];
