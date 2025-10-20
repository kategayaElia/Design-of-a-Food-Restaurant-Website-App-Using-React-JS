import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>🍽️ TimoFood Restaurant</h1>
          <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} end>
              Home
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>
              Menu
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact
            </NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>© 2025 TimoFood Restaurant | All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;