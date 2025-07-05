// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";






function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<div>About Us</div>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
