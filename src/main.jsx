import React from "react";
import ReactDOM from "react-dom/client";
import { ImageProcessingApp } from "./Components/ImageProcessingApp.jsx";

import "./assets/styles/Main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ImageProcessingApp />
  </React.StrictMode>
);
