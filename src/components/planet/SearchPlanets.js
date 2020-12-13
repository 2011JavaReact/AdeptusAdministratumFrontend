import React from "react";
import PlanetView from "./PlanetView";
import search from "../../images/search.png";

const SEARCH_URL =
  "http://52.53.150.109:8080/AdeptusAdministratum/empire?inhabitants=";

export default class SearchPlanets extends React.Component {
  state = {
    result: false,
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
    this.setState({ result: false, inhabitants: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    fetch(SEARCH_URL + this.state.inhabitants)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ result: true, planetArray: [...json] });
      });
  };

  render() {
    return (
      <div id="search-container">
        <div id="search-heading">
          <h2>Search Administratum for Inhabitants</h2>
        </div>
        <div id="search-form-container">
          <form onSubmit={this.handleSearch}>
            <p>Enter Inhabitants:</p>
            <input
              onChange={this.handleChange}
              name="inhabitants"
              value={this.state.inhabitants}
              placeholder="Search Planets by Inhabitant"
            />
            <button>Search</button>
          </form>
        </div>
        <div id="search-image-container">
          <img src={search} alt="Search Image" />
        </div>
        <div id="search-result-container">
          {this.state.result ? (
            this.state.planetArray.length < 1 ? (
              <p>No planets found with {this.state.inhabitants}s.</p>
            ) : (
              <PlanetView planetArray={this.state.planetArray} />
            )
          ) : null}
        </div>
      </div>
    );
  }
}
