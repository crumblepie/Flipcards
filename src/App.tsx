import * as React from "react";
import { hot } from "react-hot-loader/root";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './redux/store';
import { useEffect } from "react";
import axios from "axios";

import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { setQuestions } from "./redux/questionSlice";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface algo {
  _id: number;
  name: string;
  difficulty: string;
  prompt: string;
  solution: string;
  pattern: string;
}

const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = axios('http://localhost:3000', {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
      .then(response => {
        console.log(response.data);
        dispatch(setQuestions(response.data));

      })
      .catch(err => {
        console.log(err.message);
      })
  })

  return (
  <div className='App'>
    <Nav />
    <div id='bodyContainer'>
      <Sidebar />
      <Main />
    </div>
  </div>
)};

export default hot(App);
