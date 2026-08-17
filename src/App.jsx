// src/App.jsx
//
// This is the shared layout: Navbar and Footer are rendered here, once,
// so they stay on screen across every route change. <Routes> swaps out
// only the page content in between.
//
// Theme state is LIFTED UP to this top-level component (as required by
// the assignment) and passed down to Navbar as props, since Navbar is
// where the toggle button lives.

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  // Piece of state: dark/light theme, lifted here so it can be applied to
  // the whole app (via a class on <body>) and read by the Navbar toggle.
  // Read any saved preference from localStorage right away so there's no
  // flash of the wrong theme on load.
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // USE EFFECT 2 (theme persistence): whenever theme changes, save it to
  // localStorage and update a class on <body> so our CSS variables switch.
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme === "dark" ? "theme-dark" : "theme-light";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
