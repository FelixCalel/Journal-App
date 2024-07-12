import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import { JournalApp } from "./JournalApp";
import "./styles.css";
import { LoginPage } from "./auth/pages";
import RegisterPage from "./auth/pages/RegisterPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalApp />
      <LoginPage />
      <RegisterPage />
    </BrowserRouter>
  </React.StrictMode>
);
