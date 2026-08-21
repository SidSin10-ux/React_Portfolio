import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectInfo from "./ProjectInfo";

function ProjectCard({ id, title, description, image, techStack, link }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="project-card">
      <img src={image} alt={`${title} project preview`} className="project-card-image" />

      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-card-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowDetails((prev) => !prev)}
            aria-expanded={showDetails}
          >
            {showDetails ? "Hide Details" : "View Details"}
          </button>

          <Link to={`/projects/${id}`} className="btn btn-primary">
            Full Project Page
          </Link>
        </div>

        {showDetails && <ProjectInfo techStack={techStack} link={link} />}
      </div>
    </article>
  );
}

export default ProjectCard;
