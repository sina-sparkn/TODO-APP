import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", content: "One", Done: false, user: "1" },
  { id: "2", content: "Two", Done: false, user: "3" },
  { id: "3", content: "Three", Done: false, user: "2" },
];

const itemSlicer = createSlice({
  name: "item",
  initialState,

  reducers: {
    itemAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(content, useId) {
        return {
          payload: {
            id: nanoid(),
            content,
            user: useId,
          },
        };
      },
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
