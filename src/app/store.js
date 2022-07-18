import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/itemSlicer";

export default configureStore({
  reducer: {
    items: itemReducer,
  },
});
