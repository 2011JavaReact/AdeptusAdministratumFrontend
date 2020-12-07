import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import planet2 from "../images/planet2.jpg";
import army2 from "../images/army2.jpg";


export default class NavBarContainer extends React.Component {
  render() {
    return (
      <div id="navbar-container">
        <div id="brand">
          <Link className="menu-link" to="/">
            <img src={logo} alt="Logo" />
            Home
          </Link>
        </div>
        <div id="navbar-items">
        <Link className="menu-link" to="/planets">
            <img src={planet2} alt="Planet Logo" />
            Planets
          </Link>
          <Link className="menu-link" to="/garrisons">
            <img src={army2} alt="Garrison Logo" />
            Garrisons
          </Link>
          <div>Item3</div>
        </div>

        <div id="login">Login / Username</div>
      </div>
    );
  }
}
