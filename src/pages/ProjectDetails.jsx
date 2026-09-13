import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectInfo from "../components/ProjectInfo";

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${projectId}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) throw new Error("Project not found");
          throw new Error("Server error");
        }
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return (
      <div className="page container">
        <h1>Loading Project...</h1>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="page container">
        <h1>Project Not Found</h1>
        <p>We couldn't find a project with the ID "{projectId}".</p>
        <Link to="/projects" className="btn btn-primary">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="page container project-details">
      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <h1>{project.title}</h1>

      <img
        src={project.image}
        alt={`${project.title} cover graphic`}
        className="project-details-image"
      />

      <p>{project.fullDescription}</p>

      <ProjectInfo techStack={project.techStack} link={project.link} />
    </div>
  );
}

export default ProjectDetails;
