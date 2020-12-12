import React from "react";
import { Link, Redirect } from "react-router-dom";
import PlanetList from "../planet/PlanetList";

const PLANET_URL = "http://52.53.150.109:8080/AdeptusAdministratum/planets";
const BASE_URL = `http://52.53.150.109:8080/AdeptusAdministratum`;

export default class GarrisonDetail extends React.Component {
  state = {
    id: 0,
    chapter: "",
    size: 0,
    redirect: false,
    planetArray: [
      {
        id: 0,
        name: "",
        inhabitants: "",
        population: 0,
        garrison_id: 0,
      },
    ],
  };

  componentDidMount() {
    fetch(BASE_URL + this.props.match.url)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState(
          {
            id: json.id,
            chapter: json.chapter,
            size: json.size,
          },
          () =>
            console.log(
              "returned from fetch in GarrisonDetail: ",
              this.state,
              this.props
            )
        );
      });

    fetch(PLANET_URL)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ planetArray: [...json] }, () =>
          console.log("returned array from fetch: ", this.state.planetArray)
        );
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

    fetch(BASE_URL + this.props.match.url, configObject).then((resp) =>
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

  sortedPlanetList = () => {
    // First get only planets belonging to this garrison
    const filteredPlanetArray = this.state.planetArray.filter((planet) => {
      return planet.garrison_id === this.state.id;
    });
    // Second, sort and return table of planets
    if (filteredPlanetArray.length < 1) {
      return <p>Not Assigned to Any Planets</p>;
    } else {
      const sortedPlanetArray = filteredPlanetArray.sort((planetA, planetB) => {
        if (planetA.name.toUpperCase() < planetB.name.toUpperCase()) {
          return -1;
        }
        if (planetB.name.toUpperCase() < planetA.name.toUpperCase()) {
          return 1;
        }
        return 0;
      });
      return <PlanetList planetArray={sortedPlanetArray} />;
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/garrisons" />;
    } else {
      return (
        <div id="garrison-detail-container">
          <h2 className="msgSuccess">
            {this.props.history.location.state
              ? this.props.history.location.state.message
              : ""}
          </h2>
          <h1>Garrison {this.state.chapter}</h1>
          <p>Size: {this.formatNumber(this.state.size)}</p>
          <div id="planet-container-in-garrison">
            <h2>All Planets with this Garrison</h2>
            {this.sortedPlanetList()}
          </div>
          <Link to={`/garrisons/${this.state.id}/edit`}>
            <button id="updateBtn">Modify Garrison Details</button>
          </Link>
          <button id="deleteBtn" onClick={this.handleDelete}>
            Delete Garrison
          </button>
        </div>
      );
    }
  }
}
