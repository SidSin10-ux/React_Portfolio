

import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ theme, onToggleTheme }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);


  const linkClass = ({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link");

  return (
    <header className="site-header">
      <div className="nav-bar container">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          Siddharth Singh
        </NavLink>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>

        <nav
          id="primary-navigation"
          className={menuOpen ? "primary-nav primary-nav-open" : "primary-nav"}
          aria-label="Primary"
        >
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass} onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
            Contact
          </NavLink>

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? "☀ Light mode" : "🌙 Dark mode"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
