import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/itemSlicer";
import userReducer from "../features/users/userSlice";
import nightModeReducer from "../features/night-mode/nightMode";

export default configureStore({
  reducer: {
    items: itemReducer,
    users: userReducer,
    nightMode: nightModeReducer,
  },
});
