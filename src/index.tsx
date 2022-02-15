import * as React from "react";
import * as ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";
import "./styles.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
