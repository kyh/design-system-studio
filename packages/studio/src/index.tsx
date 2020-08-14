import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "app/store";
import * as serviceWorker from "./serviceWorker";

const render = () => {
  const { App } = require("./app/App");

  ReactDOM.render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app/App", render);
}
