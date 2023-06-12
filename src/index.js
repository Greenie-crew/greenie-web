import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/reducer";

import "./index.css";
import App from "./App";

const store = createStore(reducer); // reducer를 사용하여 store를 생성합니다

window.Kakao.init("2fa63138c23ddec9156e687b0af3e74f");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
