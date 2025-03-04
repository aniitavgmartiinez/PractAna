import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";

import Carta from "./pages/Carta/index.tsx"
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Carta" element={<Carta />} />

    </Routes>
  </BrowserRouter>
);
