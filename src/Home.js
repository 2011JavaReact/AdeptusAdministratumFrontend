import React from "react";
import { Link } from "react-router-dom";
import planet2 from "./images/planet2.jpg";
import army2 from "./images/army2.jpg";

const Home = () => {
  return (
    <div id="home-container">
      <h1>Welcome to Adeptus Administratum</h1>
      <div id="menu-grid">
        <div id="menu1">
          <div>
          <img src={planet2} alt="planet logo" />
          <h2>Manage Planets</h2>
          </div>
          <Link className="menu-link" to="/planets">
            View / Update / Delete Planets
          </Link>
          <Link className="menu-link" to="/planets/new">
            Add New Planet
          </Link>
        </div>
        <div id="menu2">
        <div>
          <img src={army2} alt="army logo" />
          <h2>Manage Garrisons</h2>
          </div>
          <Link className="menu-link" to="/garrisons">
            View / Update / Delete Garrisons
          </Link>
          <Link className="menu-link" to="/garrisons/new">
            Add New Garrison
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
