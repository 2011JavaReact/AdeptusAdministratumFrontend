import React from "react";
import { Link } from "react-router-dom";

// import fetchPlanets from "../actions/fetchPlanets";
import PlanetList from "./PlanetList";

export default class PlanetView extends React.Component {
  sortedPlanetList = () => {
    const sortedPlanetArray = this.props.planetArray.sort(
      (planetA, planetB) => {
        if (planetA.name.toUpperCase() < planetB.name.toUpperCase()) {
          return -1;
        }
        if (planetB.name.toUpperCase() < planetA.name.toUpperCase()) {
          return 1;
        }
        return 0;
      }
    );
    return <PlanetList planetArray={sortedPlanetArray} />;
  };

  render() {
    return <div>{this.sortedPlanetList()}</div>;
  }
}
