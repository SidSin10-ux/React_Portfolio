
import Skills from "../components/Skills";

const allSkills = [
  "HTML", "CSS", "JavaScript", "React.js",
  "Node.js", "Java", "C++", "SQL", "Git & GitHub",
];

function About() {
  return (
    <div className="page container">
      <h1>About Me</h1>

      <section aria-labelledby="about-heading" className="card">
        <h2 id="about-heading">Who I Am</h2>
        <p>
          Hello! I am a third-year B.Tech student passionate about software development,
          artificial intelligence, and full-stack web development. I enjoy solving
          real-world problems through technology and continuously learning new
          programming languages and frameworks.
        </p>
      </section>

      <section aria-labelledby="education-heading" className="card">
        <h2 id="education-heading">Education</h2>
        <h3>Bachelor of Technology (B.Tech)</h3>
        <p>
          <strong>College:</strong> National Institute of Technology Warangal
        </p>
        <p>
          <strong>Branch:</strong> Computer Science &amp; Engineering
        </p>
        <p>
          <strong>Year:</strong> Third Year
        </p>
        <p>
          <strong>CGPA:</strong> 8.49
        </p>
      </section>

      <section aria-labelledby="skills-heading" className="card">
        <h2 id="skills-heading">Technical Skills</h2>
        <Skills skills={allSkills} />
      </section>
    </div>
  );
}

export default About;
