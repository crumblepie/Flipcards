import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currTheme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.currTheme = state.currTheme === "dark" ? "light" : "dark";
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
