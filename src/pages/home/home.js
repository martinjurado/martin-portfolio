import React from "react";
import Header from "../../components/header";
import Work from "../work/index";
import About from "../about/index";
import Skills from "../skills/index";
import Responsive from "react-responsive";
import "./style.css";

const Default = props => <Responsive {...props} minWidth={768} />;

function Main() {
  return (
    <div>
      <Default>
        <div className="header">
          <Header />
          <Work />
          <About />
          <Skills />
        </div>
      </Default>
    </div>
  );
}

export default Main;
