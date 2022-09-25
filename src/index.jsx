import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Head from "./components/Head";
import Master from "./components/Master";
import Nav from "./components/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Head />
    <Nav />
    <Master />
    <App />
  </React.StrictMode>
);
