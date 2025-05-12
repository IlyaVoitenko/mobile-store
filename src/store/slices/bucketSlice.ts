import { createSlice } from "@reduxjs/toolkit";
import { InitialBucket } from "../../types";

const initialState: InitialBucket = {
  bucket: [],
  totalSumma: 0,
  typeDelivery: "",
  typePayment: "",
  addressClient: "",
  dataClient: {
    name: "",
    surname: "",
    phone: "",
    address: "",
  },
};

const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    addToBucket: (state, action) => {
      const existingProduct = state.bucket?.find(
        (item) => item.id === action.payload.id
      );
      if (!existingProduct) state.bucket = [...state.bucket, action.payload];
    },
    increaseQuantity: (state, action) => {
      const index = state.bucket.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        const updatedProduct = {
          ...state.bucket[index],
          quantity: (state.bucket[index]?.quantity ?? 0) + 1,
        };

        state.bucket[index] = updatedProduct;
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.bucket.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        const updatedProduct = {
          ...state.bucket[index],
          quantity: (state.bucket[index]?.quantity ?? 0) - 1,
        };
        state.bucket[index] = updatedProduct;
      }
    },
    setTotalSumBucket: (state, action) => {
      state.totalSumma = action.payload;
    },
    setDataClient: (state, action) => {
      state.dataClient = { ...action.payload };
    },
  },
});

export const {
  addToBucket,
  setTotalSumBucket,
  setDataClient,
  decreaseQuantity,
  increaseQuantity,
} = bucketSlice.actions;

export default bucketSlice.reducer;
