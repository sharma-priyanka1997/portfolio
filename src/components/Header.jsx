import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import config from "../config.json";

const Header = () => (
  <header className="header">
    <h1>{config.header.name}</h1>
    <h2>
      <span className="typing">{config.header.title}</span>
    </h2>
    <p>
      <a href={`mailto:${config.header.email}`}>{config.header.email}</a> |{" "}
      <a href={config.header.github} target="_blank" rel="noopener noreferrer">
        <FaGithub size={22} />
      </a>{" "}
      |{" "}
      <a href={config.header.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={22} />
      </a>{" "}
      |{" "}
      <a href={config.header.resume} download>
        <FaFilePdf size={22} /> Resume
      </a>
    </p>
  </header>
);

export default Header;