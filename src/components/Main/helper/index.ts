import { SetStateAction } from "react";

interface IQueryData {
  nameClient: string;
  phoneNumber: string;
}
interface ActionStateReducer<S> {
  (prevState: S, formData: FormData): S | Promise<S>;
}
export const queryClient: ActionStateReducer<IQueryData> = async (
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
