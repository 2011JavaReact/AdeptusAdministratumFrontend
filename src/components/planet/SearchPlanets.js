import React from "react";

export default class SearchPlanets extends React.Component {
  state = {
    inhabitants: "",
  };

  handleChange = (e) => {
    this.setState({ inhabitants: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
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
      </>
    );
  }
}

// Example URL: http://52.53.150.109:8080/AdeptusAdministratum/planets?inhabitants=Human
