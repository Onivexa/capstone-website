import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import About from "./screen/About";
import Projects from "./screen/Projects";
import Features from "./screen/Features";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">DiagnostiCode</div>
          <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/features" onClick={closeMenu}>Features</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
