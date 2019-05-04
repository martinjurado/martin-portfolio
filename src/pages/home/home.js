import React from "react";
import Header from "../../components/header";
import Work from "../work/index";
import About from "../about/index";
import Skills from "../skills/index";
import Contact from "../contact/contact";
import "./style.css";

function Main() {
  return (
    <div>
      <div className="header">
        <Header />
        <Work />
        <About />
        <Skills />
        <Contact />
        
      </div>
    </div>
  );
}

export default Main;
