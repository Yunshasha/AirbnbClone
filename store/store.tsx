import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    userInfo: profileReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
