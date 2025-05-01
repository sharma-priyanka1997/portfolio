import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const Header = () => (
  <header className="header">
    <h1>John Doe</h1>
    <h2>
      <span className="typing">Full Stack Developer</span>
    </h2>
    <p>
      <a href="mailto:john.doe@email.com">john.doe@email.com</a> |{" "}
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub size={22} />
      </a>{" "}
      |{" "}
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={22} />
      </a>{" "}
      |{" "}
      <a href="/resume.pdf" download>
        <FaFilePdf size={22} /> Resume
      </a>
    </p>
  </header>
);

export default Header;