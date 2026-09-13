
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not reach the server to fetch projects. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="page container">
      <h1>Projects</h1>
      <p className="page-intro">
        A few things I've built. Click "View Details" on any card for the tech stack and
        project link, or open the full project page for the complete write-up.
      </p>

      {loading && <p>Loading projects...</p>}
      {error && <p className="error-message" style={{ color: "red", backgroundColor: "#ffe6e6", padding: "10px", borderRadius: "4px" }}>{error}</p>}
      {!loading && !error && (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
