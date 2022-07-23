import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Ali Jahani" },
  { id: "2", name: "Sina Sparkn" },
  { id: "3", name: "Ahmad Golbaran" },
];

const userReducer = createSlice({
  name: "uesers",
  initialState,
  reducers: {},
});

export default userReducer.reducer;
