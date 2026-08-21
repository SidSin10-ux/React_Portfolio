
function ProjectInfo({ techStack, link }) {
  return (
    <div className="project-info">
      <ul className="tech-stack" aria-label="Technologies used">
        {techStack.map((tech) => (
          <li key={tech} className="tech-pill">
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View on GitHub ↗
      </a>
    </div>
  );
}

export default ProjectInfo;
