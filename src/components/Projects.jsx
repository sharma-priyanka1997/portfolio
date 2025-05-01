import React from "react";
import projects from "./data/projects";

const Projects = () => (
  <section className="projects">
    <h3>Projects</h3>
    {projects.map((project) => (
      <div key={project.name} className="project-card">
        <strong>{project.name}</strong>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    ))}
  </section>
);

export default Projects;