import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Smart Traffic System",
    description: "An IoT-based system to monitor and manage urban traffic in real-time using AI and sensors.",
    tech: ["React", "Node.js", "MongoDB", "IoT"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio to showcase my projects, skills, and resume, built with React and Tailwind CSS.",
    tech: ["React", "CSS", "Framer Motion"],
    link: "#"
  },
  {
    title: "College Automation App",
    description: "An app to automate attendance, notices, and student-teacher communication within colleges.",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "#"
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-pill">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
