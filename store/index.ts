import { configureStore } from "@reduxjs/toolkit";
import { kicksApi } from "./service/api";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    [kicksApi.reducerPath]: kicksApi.reducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kicksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
