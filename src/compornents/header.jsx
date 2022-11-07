import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/header.css";
import icon from "../img/icon.jpg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="icon_wrapper">
          <NavLink to="/">
            <img src={icon} alt="icon" />
          </NavLink>
        </div>
        <div className="right_contents">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/todo">Todo</NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
