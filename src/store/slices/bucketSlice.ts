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
    removeFromBucket: (state, action) => {
      const index = state.bucket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (!index) {
        state.bucket.splice(index, 1);
      }
    },
    clearBucket: (state) => {
      state.bucket = [];
    },
    setDataClient: (state, action) => {
      state.dataClient = { ...action.payload };
    },
  },
});

export const { addToBucket, removeFromBucket, clearBucket, setDataClient } =
  bucketSlice.actions;

export default bucketSlice.reducer;
