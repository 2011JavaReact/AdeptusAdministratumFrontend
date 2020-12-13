import React from "react";
import { Link, Redirect } from "react-router-dom";

const PLANET_URL = `http://52.53.150.109:8080/AdeptusAdministratum`;

export default class PlanetDetail extends React.Component {
  state = {
    id: "",
    name: "",
    inhabitants: "",
    population: "",
    garrisonId: "",
    garrison: {
      id: 0,
      chapter: "",
      size: 0,
    },
    redirect: false,
  };

  componentDidMount() {
    fetch(PLANET_URL + this.props.match.url)
      .then((resp) => resp.json())
      .then((json) => {
        const garrison = {
          id: json.garrison.id,
          chapter: json.garrison.chapter,
          size: json.garrison.size,
        };
        this.setState({
          id: json.id,
          name: json.name,
          inhabitants: json.inhabitants,
          population: json.population,
          garrisonId: json.garrison_id,
          garrison: { ...garrison },
        });
      });
  }

  handleDelete = () => {
    const configObject = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch(PLANET_URL + this.props.match.url, configObject).then((resp) =>
      this.setState({ redirect: true })
    );
  };

  formatNumber = (number) => {
    if (!number || Number.isNaN(number)) {
      return number;
    }
    const numberArry = parseFloat(number).toFixed(2).split(".");
    numberArry[0] = numberArry[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberArry[0];
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/planets" />;
    } else {
      return (
        <div id="planet-detail-container">
          <h2 className="msgSuccess">
            {this.props.history.location.state
              ? this.props.history.location.state.message
              : ""}
          </h2>
          <h1>Planet {this.state.name}</h1>
          <p>Inhabitants: {this.state.inhabitants}</p>
          <p>Population: {this.formatNumber(this.state.population)}</p>
          <p>Garrison Chapter: {this.state.garrison.chapter}</p>
          <p>Garrison Size: {this.formatNumber(this.state.garrison.size)}</p>
          <Link to={`/planets/${this.state.id}/edit`}>
            <button id="updateBtn">Modify Planet Details</button>
          </Link>
          <button id="deleteBtn" onClick={this.handleDelete}>
            Delete Planet
          </button>
        </div>
      );
    }
  }
}
