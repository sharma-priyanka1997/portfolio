import React from "react";
import config from "../config.json";

const Projects = () => (
  <section className="projects">
    <h3>Projects</h3>
    {config.projects.map((project) => (
      <div key={project.title} className="project-card">
        <strong>{project.title}</strong>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    ))}
  </section>
);

export default Projects;