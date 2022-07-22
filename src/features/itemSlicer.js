import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", content: "One", Done: false },
  { id: "2", content: "Two", Done: false },
  { id: "3", content: "Three", Done: false },
];

const itemSlicer = createSlice({
  name: "item",
  initialState,

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
    ItemUpdated(state, action) {
      state.map((e) => {
        if (e.id === action.payload.id) {
          e.content = action.payload.content;
        }
      });
    },
  },
});

export const { itemAdded, itemRemoved, ItemDone, ItemUpdated } =
  itemSlicer.actions;
export default itemSlicer.reducer;
