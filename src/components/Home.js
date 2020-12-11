import React from "react";
import { Link } from "react-router-dom";
import planet2 from "../images/planet2.jpg";
import army2 from "../images/army2.jpg";

const Home = (props) => {
  return (
    <div id="home-container">
      <h2 className="msgSuccess">
        {props.history.location.state
          ? props.history.location.state.message
          : ""}
      </h2>
      <h1>Welcome to Adeptus Administratum</h1>
      <p>
        The Adeptus Administratum is the administrative and bureaucratic heart
        of the Imperium of Man, managing thousands of worlds, billions of
        soldiers, and trillions of citizens.
      </p>
      <div id="menu-grid">
        <div id="menu1">
          <div>
            <img src={planet2} alt="planet logo" />
          </div>
          <Link className="menu-link" to="/planets">
            <h2>Manage Existing Planets</h2>
          </Link>
          <Link className="menu-link" exact="true" to="/planets/new">
            <h2>Add Planet</h2>
          </Link>
        </div>
        <div id="menu2">
          <div>
            <img src={army2} alt="army logo" />
          </div>
          <Link className="menu-link" to="/garrisons">
            <h2>Manage Existing Garrisons</h2>
          </Link>
          <Link className="menu-link" to="/garrisons/new">
            <h2>Add Garrison</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
