// src/data/projects.js
//
// Single source of truth for all project information.
// Projects.jsx imports this array, maps over it, and passes each
// project's fields down to <ProjectCard> as props (see README for the
// prop-drilling explanation: Projects -> ProjectCard -> ProjectInfo).

import qtrackImg from "../assets/project-qtrack.svg";
import portfolioImg from "../assets/project-portfolio.svg";
import flexImg from "../assets/project-flex.svg";

const projects = [
  {
    id: "qtrack",
    title: "QTrack",
    description:
      "A web application to manage and track queues in various service centers, improving customer experience and reducing wait times.",
    fullDescription:
      "QTrack helps service centers (banks, clinics, government offices) manage live queues instead of physical tokens. Staff can call the next customer, see average wait time per counter, and get a simple analytics view of daily footfall. The goal was to cut visible wait times and give front-desk staff a clearer picture of load throughout the day.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB"],
    image: qtrackImg,
    link: "https://github.com/SidSin10-ux",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A fully responsive personal portfolio website showcasing projects, skills, education, and achievements.",
    fullDescription:
      "The original Assignment 1 project: a static, single-page portfolio built with semantic HTML5 and hand-written CSS3. It uses Flexbox for layout, CSS custom properties for theming, and media queries so the page holds up on phones, tablets, and desktop screens. This React app you are viewing now is the direct continuation of that project.",
    techStack: ["HTML5", "CSS3", "Flexbox", "Media Queries"],
    image: portfolioImg,
    link: "https://github.com/SidSin10-ux/Portfolio",
  },
  {
    id: "flex",
    title: "Flex",
    description:
      "An AI-based web application that connects freelancers with projects using AI-based matching algorithms based on skills and experience.",
    fullDescription:
      "Flex matches freelancers to suitable projects automatically instead of relying on manual browsing. A simple matching algorithm scores freelancer skill tags against project requirements and ranks the best-fit freelancers for each listing, with a dashboard for both freelancers and clients.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB"],
    image: flexImg,
    link: "https://github.com/SidSin10-ux",
  },
];

export default projects;
