import React from "react";
import About from "../about/index";
import Work from "../work/index"
import Header from "../../components/header";
import "./style.css";

function Main() {
  return (
    <div>
      <div className="header">
        <Header />
        <Work />
        <About />
      </div>
    </div>
  );
}

export default Main;
