import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";
import "./imagehover.css";
import Trip from "../../images/trip.png";
import Store from "../../images/store.png";
import Job from "../../images/job.png";
import Pup from "../../images/pup.png";
import Dating from "../../images/date.png";
import Hang from "../../images/hang.png";
import { ButtonToolbar, Button, Row } from "react-bootstrap";

function Workcard(props) {
  return (
    <div className="work-wrapper">
      <Card style={{ width: "20rem", height: "19rem" }}>
        <Card.Body>
          <figure className="imghvr-push-up">
            <img
              alt="trip"
              variant="top"
              src={Trip}
              style={{ height: "12rem", width: "20rem" }}
            />
            <figcaption>
              <p>
                <i>
                  React App that generates an itinerary and can be updated to
                  keep up with last minute changes.
                </i>
              </p>
            </figcaption>
          </figure>
          <div className="text-center">
            <Card.Title className="sub-trip">TRIP PAL</Card.Title>
            <Row>
              <ButtonToolbar>
                <Button
                  className="demo"
                  variant="outline-primary"
                  size="sm"
                  href="https://boiling-sea-88261.herokuapp.com/"
                  target="_blank"
                >
                  Demo <i class="fas fa-globe" />
                </Button>
              </ButtonToolbar>
              <ButtonToolbar>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="https://github.com/agatha12/Travel-App"
                  target="_blank"
                >
                  Github <i class="fab fa-github" />
                </Button>
              </ButtonToolbar>
            </Row>
          </div>
        </Card.Body>
      </Card>
      <Card
        className="store"
        style={{ width: "20rem", height: "19rem" }}
        onClick={props.onClick}
      >
        <Card.Body>
          <figure className="imghvr-push-up">
            <img
              alt="top"
              variant="top"
              src={Store}
              style={{ height: "12rem", width: "20rem" }}
            />
            <figcaption>
              <p>
                <i>
                  E-commerce app that displays items through a database and
                  incorporates full CRUD capabilities.
                </i>
              </p>
            </figcaption>
          </figure>
          <div className="text-center">
            <Card.Title className="sub-trip">Dev Taukx</Card.Title>
            <Row>
              <ButtonToolbar>
                <Button
                  className="demo"
                  variant="outline-primary"
                  size="sm"
                  href="https://frozen-atoll-67387.herokuapp.com/"
                  target="_blank"
                >
                  Demo <i class="fas fa-globe" />
                </Button>
              </ButtonToolbar>
              <ButtonToolbar>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="https://github.com/agatha12/Shopping-Site"
                  target="_blank"
                >
                  Github <i class="fab fa-github" />
                </Button>
              </ButtonToolbar>
            </Row>
          </div>
        </Card.Body>
      </Card>
      <Card
        className="job"
        style={{ width: "20rem", height: "19rem" }}
        onClick={props.onClick}
      >
        <Card.Body>
          <figure className="imghvr-push-up">
            <img
              alt="job"
              variant="top"
              src={Job}
              style={{ height: "12rem", width: "17rem" }}
            />
            <figcaption>
              <p>
                <i>
                  Job searching app that helps users find openings in the tech
                  industry.
                </i>
              </p>
            </figcaption>
          </figure>

          <div className="text-center">
            <Card.Title className="sub-trip">Dream Job Finder</Card.Title>
            <Row>
              <ButtonToolbar>
                <Button
                  className="demo"
                  variant="outline-primary"
                  size="sm"
                  href="https://martinjurado.github.io/DreamJob-Finder/"
                  target="_blank"
                >
                  Demo <i class="fas fa-globe" />
                </Button>
              </ButtonToolbar>
              <ButtonToolbar>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="https://github.com/TwentyVT/crewnecksweatercrew"
                  target="_blank"
                >
                  Github <i class="fab fa-github" />
                </Button>
              </ButtonToolbar>
            </Row>
          </div>
        </Card.Body>
      </Card>

      <Card
        className="pup"
        style={{ width: "20rem", height: "19rem" }}
        onClick={props.onClick}
      >
        <Card.Body>
          <figure className="imghvr-push-up">
            <img
            alt="pup"
              variant="top"
              src={Pup}
              style={{ height: "12rem", width: "20rem" }}
            />
            <figcaption>
              <p>
                <i>
                  React App that allows user to view and like dogs. User can
                  also search dog breeds through a 3rd Party API call.
                </i>
              </p>
            </figcaption>
          </figure>
          <div className="text-center">
            <Card.Title className="sub-trip">TinDog</Card.Title>
            <Row>
              <ButtonToolbar>
                <Button
                  className="demo"
                  variant="outline-primary"
                  size="sm"
                  href="https://enigmatic-everglades-35556.herokuapp.com/"
                  target="_blank"
                >
                  Demo <i class="fas fa-globe" />
                </Button>
              </ButtonToolbar>
              <ButtonToolbar>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="https://github.com/martinjurado/Pupster-React-App"
                  target="_blank"
                >
                  Github <i class="fab fa-github" />
                </Button>
              </ButtonToolbar>
            </Row>
          </div>
        </Card.Body>
      </Card>
      <Card className="date" style={{ width: "20rem", height: "19rem" }}>
        <Card.Body>
          <figure className="imghvr-push-up">
            <img
            alt="dates"
              variant="top"
              src={Dating}
              style={{ height: "12rem", width: "17rem" }}
            />
            <figcaption>
              <p>
                <i>
                  Celebrity Dating App that matches your test scores with a
                  celebrity.
                </i>
              </p>
            </figcaption>
          </figure>
          <div className="text-center">
            <Card.Title className="sub-trip">Celeb Matcher</Card.Title>
            <Row>
              <ButtonToolbar>
                <Button
                  className="demo"
                  variant="outline-primary"
                  size="sm"
                  
                  href="https://arcane-retreat-18762.herokuapp.com/"
                  target="_blank"
                >
                  Demo <i class="fas fa-globe" />
                </Button>
              </ButtonToolbar>
              <ButtonToolbar>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="https://github.com/martinjurado/Friend-Finder-Week14"
                  target="_blank"
                >
                  Github <i class="fab fa-github" />
                </Button>
              </ButtonToolbar>
            </Row>
          </div>
        </Card.Body>
      </Card>
      <Card className="hang" style={{ width: "20rem", height: "19rem" }}>
        <Card.Body>
          <figure className="imghvr-push-up">
            <img
            alt="hanging"
              variant="top"
              src={Hang}
              style={{ height: "12rem", width: "17rem" }}
            />
            <figcaption>
              <p>
                <i>
                  Hang Man application that requires guessing the name of the
                  character with limited lives.
                </i>
              </p>
            </figcaption>
          </figure>

          <div className="text-center">
            <Card.Title className="sub-trip">Hangman</Card.Title>
            <Row>
              <ButtonToolbar>
                <Button
                  className="demo"
                  variant="outline-primary"
                  size="sm"
                  href="https://martinjurado.github.io/WordGuessing-Game-Week4/"
                  target="_blank"
                >
                  Demo <i class="fas fa-globe" />
                </Button>
              </ButtonToolbar>
              <ButtonToolbar>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="https://github.com/martinjurado/WordGuessing-Game-Week4"
                  target="_blank"
                >
                  Github <i class="fab fa-github" />
                </Button>
              </ButtonToolbar>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Workcard;
