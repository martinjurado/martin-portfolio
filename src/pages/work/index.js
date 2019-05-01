import React, { Component } from "react";
import Subheader from "../../components/work-subheader";
import Workcard from "../../components/work-card";
import { Modal, Button } from "react-bootstrap";

class Work extends Component {
  state = {
    show: false,
    
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <Subheader />
        
        <Workcard/>
      </div>
    );
  }
}

export default Work;
