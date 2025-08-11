import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/variables.css";
// src/main.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import 'flag-icons/css/flag-icons.min.css';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

document.body.classList.add("bg-dark", "text-light");