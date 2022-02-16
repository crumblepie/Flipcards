// import { configureStore } from "@reduxjs/toolkit";
const {configureStore} = require("@reduxjs/toolkit");

import navigationReducer from "./navigationSlice";
import questionReducer from "./questionSlice";


const store = configureStore({
  reducer: {
    nav: navigationReducer,
    question: questionReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;