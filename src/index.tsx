import * as React from "react";
// require("react"); 
import * as ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

// import App from "./App";
const {App} = require("./App")
// import "./styles.css";
require( "./styles.css")

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
