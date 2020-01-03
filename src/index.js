import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "unistore/react";

const rootEl = document.getElementById("root");
const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
render(AppRouter);

serviceWorker.register();
