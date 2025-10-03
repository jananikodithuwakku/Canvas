import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Canvas_01 from "./Canvas/canvas_01.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/canvas_01" element={<Canvas_01 />} />
        
      </Routes>
    </HashRouter>
  </StrictMode>
);
