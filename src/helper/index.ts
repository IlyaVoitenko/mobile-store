import { SetStateAction } from "react";
import { IQueryData, IActionStateReducer, IFiltersProduct } from "../types";
import { redirect } from "react-router-dom";

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
export const handleChangeClientName = (
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
export const handleChangeClientNumber = (
  target: EventTarget & HTMLInputElement,
  setPhoneNumber: {
    (value: SetStateAction<string>): void;
    (arg0: string): void;
  }
) => {
  const clientPhoneNumberRegex = /^\+?\d{0,15}$/;
  const { value } = target;
  const isPhone = clientPhoneNumberRegex.test(value);

  if (isPhone) setPhoneNumber(value);
};
export const handlePreSlider = (
  currentSlideNumber: number,
  setCurrentSlideNumber: {
    (value: SetStateAction<number>): void;
  }
) => {
  if (currentSlideNumber < 1) return;
  setCurrentSlideNumber(currentSlideNumber);
};
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
export const objectToFormData = (obj: Record<string, any>): FormData => {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
};
export const filtersProduct = (
  category: string | undefined
): IFiltersProduct => {
  switch (category) {
    case "Iphone":
      return {
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
        memory: ["64GB", "128GB", "256GB", "512GB", "1 TB"],
        color: ["Red", "Black", "Blue", "Yellow", "Green"],
      };
    case "IPad":
      return {
        models: ["Pro", "Air", "Mini"],
        memory: ["64GB", "128GB", "256GB", "512GB", "1 TB"],
        color: ["Red", "Black", "Blue", "Yellow", "Green"],
      };
    case "Apple Watch":
      return {
        models: ["Series 7", "SE", "Series 3"],
        memory: ["64GB", "128GB"],
      };
    case "IMac":
      return {
        models: ["Pro", "Air", "Mini"],
        memory: ["64GB", "128GB", "256GB", "512GB", "1 TB"],
        color: ["Red", "Black", "Blue", "Yellow", "Green"],
      };
    case "Android Smartphones":
      return {
        models: ["Samsung", "Xiaomi", "Huawei", "Oppo", "Vivo"],
        memory: ["64GB", "128GB", "256GB", "512GB", "1 TB"],
        color: ["Red", "Black", "Blue", "Yellow", "Green"],
      };
    case "Accessories":
      return {
        color: ["Red", "Black", "Blue", "Yellow", "Green"],
        type: ["Case", "Screen Protector", "Charger", "Headphones"],
      };
    default:
      return redirect("/");
  }
};
