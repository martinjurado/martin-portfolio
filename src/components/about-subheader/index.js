import React from "react";
import "./style.css";
import Me from "../../images/big head.png";
import { Image, Row, Col } from "react-bootstrap";

function Aboutsub() {
  return (
    <div className="aboutcontainer text-center img-fluid">
      <h2 className="about">ABOUT ME</h2>
      <Image src={Me} className="me" thumbnail />
      <p className="mesub">I am a software developer based in New York.</p>
      <Row className="mesub-container">
        <Col>
          <p className="mesub2">
            I am highly skilled in building aesthetically creative and
            mobile-responsive applications and worked with a team that
            engineered applications that solve real-time problems. What sparks
            my interest is being able to solve difficult problems and providing
            value to clients through my work.
          </p>
        </Col>
        <Col>
          <p className="mesub3">
            I love listening to music during my spare time. I am in-love with
            Japanese culture and reading Business books when I am not coding.
          </p>
        </Col>
      </Row>

      <p className="mesub4">Let's Connect!</p>
      <Row>
        <Col>
          <a href="https://www.linkedin.com/in/martin-benedict-jurado/" target="_blank" className="linkedin hvr-grow"><i className="fab fa-linkedin-in fa-2x"/></a>
          <a href="https://github.com/martinjurado" target="_blank" className="githublink hvr-grow"><i className="fab fa-github fa-2x"/></a>
        </Col>
      </Row>
    </div>
  );
}

export default Aboutsub;
