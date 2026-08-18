import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./components/index.css";
import Sidebar from "./components/Sidebar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Sidebar />
    <App />
  </StrictMode>,
);
