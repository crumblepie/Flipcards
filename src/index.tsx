import * as React from "react";
// require("react"); 
import * as ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";

// import App from "./App";
const {App} = require("./App")
// import "./styles.css";
require( "./styles.css")

ReactDOM.render(
  // <Router>
  <App />,
  // </Router>,
  document.getElementById("root")
);
