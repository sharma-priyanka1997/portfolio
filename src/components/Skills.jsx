import React from "react";
import skills from "./data/skills";

const Skills = () => (
  <section className="skills">
    <h3>Skills</h3>
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;