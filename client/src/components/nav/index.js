import React from "react";
import "./style.css";
import { Dropdown } from "react-bootstrap";

function Nav() {
  return (
    <div className="link-wrapper animated fadeIn delay-1s">
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
        <i class="fas fa-bars"/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#work" className="work">Work</Dropdown.Item>
          <Dropdown.Item href="#about" className="aboutme">About Me</Dropdown.Item>
          <Dropdown.Item href="#skills" className="skills">Skills</Dropdown.Item>
          <Dropdown.Item href="#contact" className="contact">Contact</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Nav;
