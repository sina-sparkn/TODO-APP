import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/itemSlicer";
import userReducer from "../features/users/userSlice";

export default configureStore({
  reducer: {
    items: itemReducer,
    users: userReducer,
  },
});
