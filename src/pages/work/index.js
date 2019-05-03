import React, { Component } from "react";
import Subheader from "../../components/work-subheader";
import Workcard from "../../components/work-card";


class Work extends Component {

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
