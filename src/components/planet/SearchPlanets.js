import React from "react";
import PlanetView from "./PlanetView";

const SEARCH_URL =
  "http://52.53.150.109:8080/AdeptusAdministratum/empire?inhabitants=";

export default class SearchPlanets extends React.Component {
  state = {
    inhabitants: "",
    planetArray: [],
    garrisonArray: [
      {
        id: 0,
        chapter: "",
        size: 0,
      },
    ],
  };

  handleChange = (e) => {
    this.setState({ inhabitants: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    fetch(SEARCH_URL + this.state.inhabitants)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ planetArray: [...json] });
      });
  };

  render() {
    return (
      <>
        <h1>Search Page - need to complete</h1>
        <form onSubmit={this.handleSearch}>
          <input
            onChange={this.handleChange}
            name="inhabitants"
            value={this.state.inhabitants}
            placeholder="Search Planets by Inhabitant"
          />
          <button>Search</button>
        </form>
        {this.state.planetArray.length < 1 ? null : (
          <PlanetView planetArray={this.state.planetArray} />
        )}
      </>
    );
  }
}
