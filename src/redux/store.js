import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import exampleReducer from "./exampleSlice";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    example: exampleReducer,
  },
});
