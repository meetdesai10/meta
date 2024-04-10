import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "../src/components/NavBar";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
