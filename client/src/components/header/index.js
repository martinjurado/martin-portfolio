import React from "react";
import Ny from "../../images/header 4.jpg";
import Nav from "../nav/index";
import "./style.css";
import StickyHeader from "react-sticky-header";
import "react-sticky-header/styles.css";

const Header = () => (
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <div className="Header_root">
        <Nav />
      </div>
    }
  >
    <div className="header text-center">
      <img src={Ny} alt="pup" className="w-100 header animated fadeIn" />

      <h1 className="sub-header animated fadeIn delay-1s">martin jurado</h1>
      <h3 className="title animated fadeIn delay-1s">software developer</h3>
    </div>
  </StickyHeader>
);

export default Header;
