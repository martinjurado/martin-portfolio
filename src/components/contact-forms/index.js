import React from "react";
import Footpic from "../../images/header.jpg";
import { Image, Form } from "react-bootstrap";
import "./style.css";

function Contactsub(props) {
  const {handleSubmit} = props
  return (
    <div className="text-center" id="contact">
      <Image src={Footpic} alt="foot" className="w-100 footpic" />
      <div className="contact-container">
        <h2 class="contact-head">CONTACT</h2>
        <p className="contactsub">Let's work together!</p>
        <Form id="contact-form" method="POST">
          <Form.Group>
            <input type="text" className="form-control" id="name" placeholder="Name or Company"/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              placeholder="Your Message"
            />
          </Form.Group>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </Form>
      </div>
    </div>
  );
}

export default Contactsub;
