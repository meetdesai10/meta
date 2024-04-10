import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar.js";
import Home from "./pages/HomePage.js";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
