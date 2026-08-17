// src/components/ProjectInfo.jsx
//
// This is the SECOND level of prop drilling for this assignment:
//
//   Projects.jsx  --(props)-->  ProjectCard.jsx  --(props)-->  ProjectInfo.jsx
//
// Projects.jsx reads the raw data from data/projects.js and passes each
// project's fields into <ProjectCard>. ProjectCard does not "own" this
// data - it just receives it and forwards the tech stack + link fields
// straight down into <ProjectInfo> as its own props. ProjectInfo never
// talks to data/projects.js directly, which is what makes this prop
// drilling rather than just "a component using its own data".

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
