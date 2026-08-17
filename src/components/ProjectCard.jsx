// src/components/ProjectCard.jsx
//
// Receives ALL of its content through props (title, description, image,
// techStack, link, id) - nothing about a specific project is hardcoded
// here. Projects.jsx renders one <ProjectCard> per project in the array.
//
// It also owns its OWN "showDetails" state. Because Projects.jsx renders
// several <ProjectCard> instances, each instance gets its own independent
// copy of showDetails - clicking "View Details" on the QTrack card has no
// effect on the Flex card, even though both cards run the exact same code.

import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectInfo from "./ProjectInfo";

function ProjectCard({ id, title, description, image, techStack, link }) {
  // Independently scoped state - one copy per <ProjectCard> instance.
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

        {/* ProjectInfo only appears once this card's own state says to show it.
            techStack and link are drilled down from the props this card received. */}
        {showDetails && <ProjectInfo techStack={techStack} link={link} />}
      </div>
    </article>
  );
}

export default ProjectCard;
