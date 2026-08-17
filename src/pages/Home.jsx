// src/pages/Home.jsx
//
// USE EFFECT 1 (Home loading): simulates a short loading sequence when the
// page first mounts, using setTimeout inside useEffect(..., []) so it only
// runs once. The timer is cleaned up in the effect's return function so it
// doesn't try to update state if the user navigates away within that 1s.

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skills from "../components/Skills";

const highlightSkills = ["React.js", "JavaScript", "Node.js", "SQL", "Git & GitHub"];

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cleanup prevents the timer from running after unmount.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // ~1 second simulated load

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen" role="status" aria-live="polite">
        <p>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div className="page home-page">
      <section className="hero" aria-labelledby="hero-name">
        {/* hero-content gets the CSS fade-slide-in animation */}
        <div className="hero-content">
          {/* Initials avatar replaces personal photo */}
          <div className="hero-avatar" aria-hidden="true">SS</div>

          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 id="hero-name">Siddharth Singh</h1>
          <p className="hero-subtitle">3rd Year B.Tech Student</p>
          <p className="hero-subtitle">
            A third-year B.Tech Computer Science &amp; Engineering student who enjoys
            building full-stack web applications and solving real problems with code.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Contact Me
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="container home-skills" aria-labelledby="home-skills-heading">
        <h2 id="home-skills-heading">What I work with</h2>
        <Skills skills={highlightSkills} />
      </section>
    </div>
  );
}

export default Home;
