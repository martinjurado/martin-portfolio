import React from "react";
import Ny from "../../images/header 3.jpg";
import Nav from "../nav/index";
import "./style.css";
import StickyHeader from "react-sticky-header";
import 'react-sticky-header/styles.css';

const Header = () => (
  <div className="header text-center">
    <img src={Ny} alt="pup" className="w-100 header animated fadeIn" />
    <Nav />
    <h1 className="sub-header animated fadeIn delay-1s">martin jurado</h1>
    <h3 className="title animated fadeIn delay-1s">software developer</h3>
  </div>
);

export default Header;
