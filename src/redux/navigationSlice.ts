import { createSlice } from "@reduxjs/toolkit";

// maybe in here we have the initial deck of cards or the initial new cards can be an empty array?
const initialState = {};

export const navigationSlice = createSlice({
  name: "addCard",
  initialState,
  reducers: {
    addCard: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addCard } = navigationSlice.actions;

export default navigationSlice.reducer;
