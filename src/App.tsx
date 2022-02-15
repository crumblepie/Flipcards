import * as React from "react";
// import {
//   Routes,
//   Route,
//   Switch,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <div className='app'>
    <Nav />
    <div id='bodyContainer'>
      <Sidebar />
      <Main />
    </div>
  </div>
);

export default hot(App);
// module.exports = hot(App)