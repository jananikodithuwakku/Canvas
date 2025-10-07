import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Canvas_01 from "./Canvas/canvas_01.jsx";
import Canvas_02 from "./Canvas/canvas_02.jsx";
import Canvas_03 from "./Canvas/canvas_03.jsx";
import Canvas_04 from "./Canvas/canvas_04.jsx";
import Canvas_05 from "./Canvas/canvas_05.jsx";
import Canvas_06 from "./Canvas/canvas_06.jsx";
import Canvas_07 from "./Canvas/canvas_07.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/canvas_01" element={<Canvas_01 />} />
        <Route path="/canvas_02" element={<Canvas_02 />} />
        <Route path="/canvas_03" element={<Canvas_03 />} />
        <Route path="/canvas_04" element={<Canvas_04 />} />
        <Route path="/canvas_05" element={<Canvas_05 />} />
        <Route path="/canvas_06" element={<Canvas_06 />} />
        <Route path="/canvas_07" element={<Canvas_07 />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
