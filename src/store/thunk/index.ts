import { createAsyncThunk } from "@reduxjs/toolkit";

import { setIsLoading, setProductsByFilter } from "../slices/productsSlice";
import { handleApplyFilters } from "../../helper";
import { ApplyFilterArgs, initialStateProps } from "../../types";

export const setInitialProductFilteredThunk = createAsyncThunk(
  "products/setInitialProductFilteredThunk",
  async (_, { getState, dispatch }) => {
    try {
      const state = getState() as initialStateProps;

      const products = state.products.products;
      if (!products || Object.keys(products).length === 0)
        throw new Error("Products list is empty or undefined");

      const allProducts = Object.values(products).flat();
      dispatch(setProductsByFilter([...allProducts]));
      return true;
    } catch (error) {
      console.error("Thunk error:", error);
      throw error;
    }
  }
);
export const applyInitialFilterThunk = createAsyncThunk(
  "products/applyInitialFilter",
  async (
    { productsByFilterSelector, selectedFilters }: ApplyFilterArgs,
    { dispatch }
  ) => {
    try {
      dispatch(setIsLoading(true));
      await dispatch(setInitialProductFilteredThunk());
      if (
        !productsByFilterSelector ||
        Object.keys(productsByFilterSelector).length === 0
      ) {
        dispatch(setIsLoading(false));

        throw new Error("productsFilter list is empty or undefined");
      }
      dispatch(
        setProductsByFilter(
          handleApplyFilters(productsByFilterSelector, selectedFilters)
        )
      );
      console.log(
        handleApplyFilters(productsByFilterSelector, selectedFilters)
      );

      dispatch(setIsLoading(false));
      return true;
    } catch (error) {
      console.error(error);
    }
  }
);
