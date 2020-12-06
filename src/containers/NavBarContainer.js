import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default class NavBarContainer extends React.Component {
  render() {
    return (
      <div id="navbar-container">
        <div id="brand">
          <Link className="menu-link" to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div id="navbar-items">
          <div>Item1</div>
          <div>Item2</div>
          <div>Item3</div>
        </div>

        <div id="login">Login / Username</div>
      </div>
    );
  }
}
