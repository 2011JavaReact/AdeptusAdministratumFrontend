import React from "react";
import { Redirect } from "react-router-dom";

const BASE_URL = "http://52.53.150.109:8080/AdeptusAdministratum";
// const GARRISON_URL = "http://52.53.150.109:8080/AdeptusAdministratum/garrisons";

export default class EditGarrison extends React.Component {
  state = {
    id: "",
    chapter: "",
    size: "",
    redirect: false,
  };

  componentDidMount() {
    fetch(BASE_URL + this.props.match.url)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          id: json.id,
          chapter: json.chapter,
          size: json.size,
        });
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const configObject = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        chapter: this.state.chapter,
        size: this.state.size,
      }),
    };

    fetch(BASE_URL + "/garrisons/" + this.state.id, configObject)
      .then((resp) => resp.json())
      .then((json) => this.setState({ id: json.id, redirect: true }));
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/garrisons/${this.state.id}`,
            state: { message: "Garrison Successfully Updated!" },
          }}
        />
      );
    } else {
      return (
        <div id="add-garrison-container">
          <h1>Modify Garrison</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Chapter:
              <input
                type="text"
                name="chapter"
                onChange={this.handleChange}
                value={this.state.chapter}
              />
            </label>
            <label>
              Size:
              <input
                type="number"
                name="size"
                onChange={this.handleChange}
                value={this.state.size}
                step="1000"
              />
            </label>
            <button type="submit">Update</button>
          </form>
        </div>
      );
    }
  }
}
