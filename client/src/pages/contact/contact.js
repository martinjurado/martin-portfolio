import React, { Component } from "react";
import Contactsub from "../../components/contact-forms";
import axios from "axios";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const form = await axios.post("/api/form", {
      name,
      email,
      message
    });
    alert("Message Sent!");
  }

  resetForm = () => {
    document.getElementById("contact-form").reset();
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Contactsub
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Contact;
