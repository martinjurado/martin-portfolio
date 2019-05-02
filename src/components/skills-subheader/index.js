import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

function Skillsub() {
  return (
    <div className="text-center">
      <h2 className="skillsub">SKILLS</h2>
      <p className="skillsub2">
        I am a Full Stack Web Developer and a recent graduate of Rutgers Web
        Development Coding Bootcamp
        <br />
        where I honed my skills in learning a multitude of programming
        languages.
      </p>
      <i className="fab fa-html5 fa-3x html" />
      <i className="fab fa-css3-alt fa-3x css" />
      <i class="fab fa-bootstrap fa-3x bootstrap" />
      <i className="fab fa-js fa-3x js" />
      <i className="fab fa-react fa-3x react" />
      <i className="fab fa-node-js fa-3x node" />
      
      <h2 className="frontend text-center">FRONT END</h2>
      <p className="skill-list">
        HTML, CSS, BOOTSTRAP, JAVASCRIPT, JQUERY, REACT.JS
      </p>

      <h2 className="frontend text-center">BACK END</h2>
      <p className="skill-list">NODE.JS, MYSQL, MONGODB, FIREBASE, REDUX</p>
    </div>
  );
}

export default Skillsub;
