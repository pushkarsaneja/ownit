import { createSlice } from "@reduxjs/toolkit";
import { setCurrentProduct, removeCurrentProduct } from "./reducers";

const currentProductSlice = createSlice({
  name: "currentProduct",
  initialState: {
    product: null,
  },
  reducers: {
    setCurrentProduct,
    removeCurrentProduct,
  },
});

export const currentProductActions = currentProductSlice.actions;
export default currentProductSlice;
