import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";
import Trip from "../../images/trip.png";
import Store from "../../images/store.png";
import Job from "../../images/job.png";
import Pup from "../../images/pup.png";
import Dating from "../../images/date.png";
import Hang from "../../images/hang.png";

function Workcard(props) {
  const {onClick, handleClose} = props
  return (
    <div>
      <Card style={{ width: "20rem", height: "16rem" }} onClick={onClick} handleClose={handleClose}>
        <Card.Body>
          <Card.Img variant="top" src={Trip} style={{ height: "10rem" }} />
          <div className="text-center">
            <Card.Title className="sub-trip">TRIP PAL</Card.Title>
            <Card.Text className="sub-desc">
              Full Stack Web Developer
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="store" style={{ width: "20rem", height: "16rem" }} onClick={props.onClick} >
        <Card.Body>
          <Card.Img variant="top" src={Store} style={{ height: "10rem" }} />
          <div className="text-center">
            <Card.Title className="sub-trip">Dev Taukx</Card.Title>
            <Card.Text className="sub-desc">
              Full Stack Web Developer
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="job" style={{ width: "20rem", height: "16rem" }} onClick={props.onClick}>
        <Card.Body>
          <Card.Img variant="top" src={Job} style={{ height: "10rem" }} />
          <div className="text-center">
            <Card.Title className="sub-trip">Dream Job Finder</Card.Title>
            <Card.Text className="sub-desc">
              Front End Developer
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="pup" style={{ width: "20rem", height: "16rem" }}onClick={props.onClick}>
        <Card.Body>
          <Card.Img variant="top" src={Pup} style={{ height: "10rem" }} />
          <div className="text-center">
            <Card.Title className="sub-trip">TinDog</Card.Title>
            <Card.Text className="sub-desc">
              Front End Developer
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="date" style={{ width: "20rem", height: "16rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={Dating} style={{ height: "10rem" }} />
          <div className="text-center">
            <Card.Title className="sub-trip">Celeb Matcher</Card.Title>
            <Card.Text className="sub-desc">
              Full Stack Web Developer
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="hang" style={{ width: "20rem", height: "16rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={Hang} style={{ height: "10rem" }} />
          <div className="text-center">
            <Card.Title className="sub-trip">Hangman</Card.Title>
            <Card.Text className="sub-desc">
              Front End Developer
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
    
  );
}

export default Workcard;
