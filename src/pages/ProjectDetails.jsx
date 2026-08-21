
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import ProjectInfo from "../components/ProjectInfo";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="page container">
        <h1>Project Not Found</h1>
        <p>We couldn&apos;t find a project with the ID &ldquo;{projectId}&rdquo;.</p>
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
