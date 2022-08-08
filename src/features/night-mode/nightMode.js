import { createSlice } from "@reduxjs/toolkit";

const nightModeReducer = createSlice({
  name: "nightMode",
  initialState: false,
  reducers: {
    nightMode(state, action) {
      if (action.payload) {
        return !state;
      }
    },
  },
});

export const { nightMode } = nightModeReducer.actions;
export default nightModeReducer.reducer;
