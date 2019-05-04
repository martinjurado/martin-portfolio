import React from "react";
import Ny from "../../images/header 3.jpg";
import "./style.css";

function Header() {
  return (
    <div className="header text-center">
      
        <img src={Ny} alt="pup" className="w-100 header animated fadeIn" />
        <h1 className="sub-header animated fadeIn delay-1s">martin jurado</h1>
        <h3 className="title animated fadeIn delay-1s">software developer</h3>
      
    </div>
  );
}

export default Header;
