import React from "react";
import "./style.css";


function Nav() {
  return (
    <div className="link-wrapper">
      <nav>
        <a
          href="#work"
          className="work hvr-grow"
          rel="noopener noreferrer"
        >
          work
        </a>
        <a
          href="#about"
          className="aboutme hvr-grow"
          rel="noopener noreferrer"
        >
          about me
        </a>
        <a
          href="#skills"
          className="skills hvr-grow"
          rel="noopener noreferrer"
        >
          skills
        </a>
        <a
          href="#contact"
          className="contact hvr-grow"
          rel="noopener noreferrer"
        >
          contact
        </a>
      </nav>
    </div>
  );
}

export default Nav;
