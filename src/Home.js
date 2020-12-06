import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-container">
      <h1>Welcome to Adeptus Administratum</h1>
      <div id="menu-grid">
        <div id="menu1">
          <h2>Manage Planets</h2>
          <Link className="menu-link" to="/planets" exact>
            View / Update / Delete Planets
          </Link>
          <Link className="menu-link" to="/planets" exact>
            Add New Planet
          </Link>
        </div>
        <div id="menu2">
          <h2>Manage Garrisons</h2>
          <Link className="menu-link" to="/planets" exact>
            View / Update / Delete Garrisons
          </Link>
          <Link className="menu-link" to="/planets" exact>
            Add New Garrison
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
