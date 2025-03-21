import { IProduct } from "../../types";
export const listProduct: IProduct[] = {
  categories: [
    {
      Iphone: [
        {
          id: 52456,
          name: "Silicone case overlay Original iPhone Silicone Case",
          price: 3,
          inStock: true,
          isPopular: true,
          colors: ["Red", "Black", "Blue", "Yellow", "Green"],
          models: [
            "13 Pro Max",
            "13 Pro",
            "12 Pro Max",
            "12 Pro ",
            "12",
            "11 Pro Max",
            "11 Pro ",
            "11",
          ],
          storageOptions: ["64GB", "128GB", "256GB", "512GB", "1 TB"],
          selectedColor: "blue",
          selectedModel: "8 plus",
          selectedStorage: "128GB",
          quantity: 1,
        },
      ],
    },
    {
      IPad: [],
    },
    { Smartphones: [] },
    { Accessories: [] },
    { IMac: [] },
    { AppleWatch: [] },
  ],
};
