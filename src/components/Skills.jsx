// src/components/Skills.jsx
//
// Reusable component: it renders whatever list of skills it is given
// through the "skills" prop, so it can be reused on the Home page (a
// short highlight list) and the About page (the full list) with
// different data.

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
