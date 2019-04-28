import React from "react";
import About from "../about/index";
import Header from "../../components/header";
import "./style.css";

function Main() {
  return (
    <div>
      <div className="header">
      <Header/>
      </div>
      <About />
    </div>
  );
}

export default Main;
