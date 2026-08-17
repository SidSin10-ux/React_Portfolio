// src/main.jsx
// Entry point. BrowserRouter wraps the whole app so react-router-dom's
// <Routes>, <Route>, <Link> and <NavLink> work everywhere inside <App />.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
