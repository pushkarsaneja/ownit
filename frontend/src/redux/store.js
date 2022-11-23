import { configureStore } from "@reduxjs/toolkit";
import currentProductSlice from "./currentProduct";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    currentProduct: currentProductSlice.reducer,
  },
});

export default store;
