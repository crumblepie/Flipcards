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

const questions: algo[] = [{_id: 1, name: 'test', difficulty: 'test', prompt: 'test', solution: 'test', pattern: 'test'}];

const initialState = {
  questions: questions
}

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      // send a post request to the DB
      fetch('post uri')
        
        .then(data => {
          const questions = state.questions;
          questions.push(action.payload);
          state.questions = questions;
        })
    },
    setQuestions: (state, action) => {
      console.log('changing state', action.payload);
      state.questions = <algo[]>action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addQuestion, setQuestions } = questionSlice.actions;

export default questionSlice.reducer;
