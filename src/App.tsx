import * as React from "react";
// import {
//   Routes,
//   Route,
//   Switch,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getQuestions } from "./redux/questionSlice";

const App = () => {
  const dispatch = useDispatch();

  const useEffect = () =>{ 
    // fetch()
    // .then(data => {
    //   dispatch(getQuestions(data));
    // })
    dispatch(getQuestions('a'));
  }
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
