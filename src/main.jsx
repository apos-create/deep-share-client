
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer 
      position="top-right" 
      autoClose={3000} 
      hideProgressBar={false} 
      closeOnClick 
      draggable 
      pauseOnHover 
      theme="colored" />
  </React.StrictMode>
);

