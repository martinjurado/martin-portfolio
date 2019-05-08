import React, { Component } from "react";
import Contactsub from "../../components/contact-forms";

class Contact extends Component {
  handleSubmit = e => {
    e.preventDefault();
    alert("Message Sent!");
  };

  resetForm = () => {
    document.getElementById('contact-form').reset();
  }
  render() {
    return (
      <div>
        <Contactsub handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Contact;
