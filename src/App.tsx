import * as React from "react";
// import {
//   Routes,
//   Route,
//   Switch,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './redux/store';

import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const App = () => {

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
