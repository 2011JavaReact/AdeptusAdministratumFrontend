import React from "react";
import { Link } from "react-router-dom";
// import fetchPlanets from "../actions/fetchPlanets";
import PlanetList from "../components/planet/PlanetList";

const PLANET_URL = "http://52.53.150.109:8080/AdeptusAdministratum/planets";
const GARRISON_URL = "http://52.53.150.109:8080/AdeptusAdministratum/garrisons";

export default class PlanetContainer extends React.Component {
  state = {
    id: 0,
    name: undefined,
    inhabitants: undefined,
    population: 0,
    garrisonId: 0,
    planetArray: [
      {
        id: 0,
        name: "",
        inhabitants: "",
        population: 0,
        garrison_id: 0,
      },
    ],
    garrisonArray: [
      {
        id: 0,
        chapter: "",
        size: 0,
      },
    ],
  };

  componentDidMount() {
    fetch(PLANET_URL)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ planetArray: [...json] });
      });
  }

  sortedPlanetList = () => {
    const sortedPlanetArray = this.state.planetArray.sort(
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
    return (
      <div id="planet-container">
        <h1>All Planets in the Administratum</h1>
        {this.sortedPlanetList()}
      </div>
    );
  }
}
