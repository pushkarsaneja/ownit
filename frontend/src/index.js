import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/variables.css";
import "./styles/main.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: "30px",
  transition: transitions.SCALE,
};
root.render(
  // <React.StrictMode>
  <AlertProvider template={AlertTemplate} {...options}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </AlertProvider>
  // </React.StrictMode>
);
