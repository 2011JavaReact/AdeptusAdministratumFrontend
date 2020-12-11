import React from "react";
import { Redirect } from "react-router-dom";

const PLANET_URL = "http://52.53.150.109:8080/AdeptusAdministratum/planets";
const GARRISON_URL = "http://52.53.150.109:8080/AdeptusAdministratum/garrisons";

export default class AddPlanet extends React.Component {
  state = {
    id: 0,
    name: "",
    inhabitants: "",
    population: "",
    garrisonId: "",
    garrisonArray: [
      {
        id: 0,
        chapter: "",
        size: "",
      },
    ],
    redirect: false,
  };

  componentDidMount() {
    fetch(GARRISON_URL)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ garrisonArray: [...json] });
      });
  }

  createGarrisonSelect = () => {
    return this.state.garrisonArray.map((garrison) => {
      return (
        <option key={garrison.id} value={garrison.id}>
          {garrison.chapter}
        </option>
      );
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        inhabitants: this.state.inhabitants,
        population: this.state.population,
        garrison_id: this.state.garrisonId,
      }),
    };

    fetch(PLANET_URL, configObject)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ id: json.id, redirect: true });
      });
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/planets/${this.state.id}`,
            state: { message: "Planet Successfully Created!" },
          }}
        />
      );
    } else {
      return (
        <div id="add-planet-container">
          <h1>Add a Planet</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </label>
            <label>
              Inhabitants:
              <input
                type="text"
                list="inhabitant-list"
                name="inhabitants"
                onChange={this.handleChange}
                value={this.state.inhabitants}
              />
              <datalist id="inhabitant-list">
                <option>Asharian</option>
                <option>Eldar</option>
                <option>Human</option>
                <option>Ork</option>
              </datalist>
            </label>
            <label>
              Population:
              <input
                type="number"
                name="population"
                onChange={this.handleChange}
                value={this.state.population}
                step="1000"
              />
            </label>
            <label>
              Garrison:
              <select
                name="garrisonId"
                onChange={this.handleChange}
                value={this.state.garrisonId}
                required
              >
                <option value="" disabled defaultValue hidden>
                  Choose from list
                </option>
                {this.createGarrisonSelect()}
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
}
