import React from "react";
import { Link } from "react-router-dom";
// import fetchPlanets from "../actions/fetchPlanets";
import GarrisonList from "../components/garrison/GarrisonList";

const PLANET_URL = "http://52.53.150.109:8080/AdeptusAdministratum/planets";
const GARRISON_URL = "http://52.53.150.109:8080/AdeptusAdministratum/garrisons";

export default class GarrisonContainer extends React.Component {
  state = {
    garrisonArray: [],
  };

  componentDidMount() {
    fetch(GARRISON_URL)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ garrisonArray: [...json] });
      });
  }

  render() {
    return (
      <div id="garrison-container">
        <h1>All Garrisons in the Administratum</h1>
        <GarrisonList garrisonArray={this.state.garrisonArray} />
      </div>
    );
  }
}
