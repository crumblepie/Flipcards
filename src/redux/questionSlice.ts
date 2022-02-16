import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: ['question1', 'question2'],
  count: 1
};

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
    getQuestions: (state, action) => {
      // fetch request to the backend and get DB
      // fetch('backend URI')
      // .then(data => {
      //   const questions = JSON.parse(data);
      //   state.questions = questions;
      // })
      state.count += 2;
      state.questions = [`question-${action.payload}-${state.count}`, `question${state.count+1}`]
    }
  },
});

// Action creators are generated for each case reducer function
export const { addQuestion, getQuestions } = questionSlice.actions;

export default questionSlice.reducer;
