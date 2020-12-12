import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import logo from "../images/logo.png";
import planet2 from "../images/planet2.jpg";
import army2 from "../images/army2.jpg";

export default class NavBarContainer extends React.Component {
  render() {
    return (
      <div id="navbar-container">
        <div id="brand">
          <NavLink exact activeClassName="active" className="menu-link" to="/">
            <img src={logo} alt="Logo" />
            Home
          </NavLink>
        </div>
        <div id="navbar-items">
          <NavLink activeClassName="active" className="menu-link" to="/planets">
            <img src={planet2} alt="Planet Logo" />
            Planets
          </NavLink>
          <NavLink
            activeClassName="active"
            className="menu-link"
            to="/garrisons"
          >
            <img src={army2} alt="Garrison Logo" />
            Garrisons
          </NavLink>
          <NavLink
            activeClassName="active"
            className="menu-link"
            to="/planets/search"
          >
            Planet Search
          </NavLink>
        </div>
        <div id="user-items">
          <Link className="menu-link" to="/login">
            Login
          </Link>
          <Link className="menu-link" to="/logout">
            Logout
          </Link>
        </div>
      </div>
    );
  }
}
