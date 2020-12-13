import React from "react";
import { Redirect } from "react-router-dom";

const PLANET_URL = "http://52.53.150.109:8080/AdeptusAdministratum/planets";
const GARRISON_URL = "http://52.53.150.109:8080/AdeptusAdministratum/garrisons";

export default class AddGarrison extends React.Component {
  state = {
    id: 0,
    chapter: "",
    size: "",
    redirect: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    /// need to clear form after
    // Add redirect
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        chapter: this.state.chapter,
        size: this.state.size,
      }),
    };
    console.log(configObject);

    fetch(GARRISON_URL, configObject)
      .then((resp) => resp.json())
      .then((json) => this.setState({ id: json.id, redirect: true }));
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/garrisons/${this.state.id}`,
            state: { message: "Garrison Successfully Created!" },
          }}
        />
      );
    } else {
      return (
        <div id="add-garrison-container">
          <h1>Add Garrison</h1>
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
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
}
