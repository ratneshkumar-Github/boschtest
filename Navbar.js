import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="navbar-header">
          <div className="navbar-brand" href="#">
            <img src="bosch.png" alt="Dispute Bills" />
          </div>
        </div>
        <div className="col-sm-10 col-xs-8 userName">User Name</div>
      </nav>
      <div className="sidebar">
        <NavLink exact to="/">
          <i className="fa fa-fw fa-home"></i> Home
        </NavLink>
        <NavLink exact to="/About">
          <i className="fa fa-fw fa-wrench"></i> About
        </NavLink>
        <NavLink exact to="/Contact">
          <i className="fa fa-fw fa-user"></i> Contact
        </NavLink>
        
      </div>

      <div className="main"></div>
    </div>
  );
};

export default Navbar;
