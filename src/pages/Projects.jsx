
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="page container">
      <h1>Projects</h1>
      <p className="page-intro">
        A few things I've built. Click "View Details" on any card for the tech stack and
        project link, or open the full project page for the complete write-up.
      </p>

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
    </div>
  );
}

export default Projects;
