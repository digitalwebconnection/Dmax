// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

// import AboutUs from "./components/About/AboutUs";
// import Project from "./components/Project/Project";
// import Service from "./components/Service/Service";

// import Careers from "./components/Careers/Careers";
// import ContactUs from "./components/Contact/ContactUs";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/"         element={<Home />} />
        {/* <Route path="/about"    element={<AboutUs />} />
        <Route path="/project"  element={<Project />} />
        <Route path="/service"  element={<Service />} />
        <Route path="/careers"  element={<Careers/>}/>

        <Route path="/contact"  element={<ContactUs/>}/> */}

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
