import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

window.Kakao.init("2fa63138c23ddec9156e687b0af3e74f");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
