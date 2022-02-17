import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface algo {
  _id: number;
  name: string;
  difficulty: string;
  prompt: string;
  solution: string;
  pattern: string;
}

const questions: algo[] = [
  {
    _id: 1,
    name: "Two Sum",
    difficulty: "Easy",
    prompt: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.`,
    solution: "test",
    pattern: "Hash Table",
  },
];

const initialState = {
  questions: questions,
  flipCardQuestion: <algo>questions[0],
  flipCardIndex: <number>0
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      // send a post request to the DB
      fetch("post uri").then((data) => {
        const questions = state.questions;
        questions.push(action.payload);
        state.questions = questions;
      });
    },
    setQuestions: (state, action) => {
      console.log("changing state", action.payload);
      state.questions = <algo[]>action.payload;
    },
    setFlipCardIndex: (state, action) => {
      let index = action.payload;
      if (index <  0) index = 0;
      if (index >= state.questions.length) index = state.questions.length -1;
      state.flipCardIndex = index;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addQuestion, setQuestions, setFlipCardIndex } =
  questionSlice.actions;

export default questionSlice.reducer;
