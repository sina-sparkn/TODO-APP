import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "3",
    content: "Three",
    Done: false,
    user: "2",
    reaction: {
      like: 0,
      dislike: 0,
    },
  },
  {
    id: "2",
    content: "Two",
    Done: false,
    user: "3",
    reaction: {
      like: 0,
      dislike: 0,
    },
  },
  {
    id: "1",
    content: "One",
    Done: false,
    user: "1",
    reaction: {
      like: 0,
      dislike: 0,
    },
  },
];

const itemSlicer = createSlice({
  name: "item",
  initialState,

  reducers: {
    itemAdded: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(content, userId) {
        return {
          payload: {
            id: nanoid(),
            content,
            user: userId,
            reaction: {
              like: 0,
              dislike: 0,
            },
            Done: false,
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
    reactionAdded(state, action) {
      state.map((e) => {
        if (e.id === action.payload.id && action.payload.name === "like") {
          e.reaction.like += 1;
        }
        if (e.id === action.payload.id && action.payload.name === "dislike") {
          e.reaction.dislike += 1;
        }
      });
    },
  },
});

export const { itemAdded, itemRemoved, ItemDone, ItemUpdated, reactionAdded } =
  itemSlicer.actions;
export default itemSlicer.reducer;
