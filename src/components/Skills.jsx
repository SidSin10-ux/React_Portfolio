
function Skills({ skills, title }) {
  return (
    <div className="skills-block">
      {title && <h3 className="skills-title">{title}</h3>}
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-pill">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
