  import React from "react";
  import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
  import "./App.css"; 
  import Home from "./screen/Home";
  import About from "./screen/About";
  import Projects from "./screen/Projects";
  import Features from "./screen/Features";


  function App() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path= "/features" element= { <Features /> } />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
