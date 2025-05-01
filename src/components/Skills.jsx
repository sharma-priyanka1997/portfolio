import React from "react";
import config from "../config.json";

const Skills = () => (
  <section className="skills">
    <h3>Skills</h3>
    <ul>
      {config.skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;