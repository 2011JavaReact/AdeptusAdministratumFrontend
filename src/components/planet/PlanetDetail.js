import React from "react";

const PLANET_URL = `http://52.53.150.109:8080/AdeptusAdministratum/`;

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
  };

  componentDidMount() {
    fetch(PLANET_URL + this.props.match.url)
      .then((resp) => resp.json())
      .then((json) => {
          console.log(json);
        const garrison = {
          id: json.garrison.id,
          chapter: json.garrison.chapter,
          size: json.garrison.size,
        };
        console.log(garrison)
        this.setState(
          {
            id: json.id,
            name: json.name,
            inhabitants: json.inhabitants,
            population: json.population,
            garrisonId: json.garrison_id,
            garrison: { ...garrison },
          },
          () =>
            console.log("returned from fetch in PlanetDetail: ", this.state)
        );
      });
  }

  render() {
    return (
        <div>
    <h1>Planet Detail Component</h1>
    <p>Planet Name: {this.state.name}</p>
    <p>Inhabitants: {this.state.inhabitants}</p>
    <p>Population: {this.state.population}</p>
    <p>Garrison Chapter: {this.state.garrison.chapter}</p>
    <p>Garrison Size: {this.state.garrison.size}</p>
    </div>
    );
  }
}
