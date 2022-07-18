import { createSlice } from "@reduxjs/toolkit";

const itemSlicer = createSlice({
  name: "item",
  initialState: [],

  reducers: {
    itemAdded(state, action) {
      state.push(action.payload);
    },
    itemRemoved(state, action) {
      return state.filter((e) => e.id != action.payload);
    },
    ItemDone(state, action) {
      state.map((e) => {
        if (e.id === action.payload) {
          e.Done = !e.Done;
        }
      });
    },
  },
});

export const { itemAdded, itemRemoved, ItemDone } = itemSlicer.actions;
export default itemSlicer.reducer;
