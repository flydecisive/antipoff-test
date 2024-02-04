import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/store.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
