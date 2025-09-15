import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import filterReducder from "./features/filters/filterSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    filters: filterReducder,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
