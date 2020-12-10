import React from "react";
import { Redirect } from 'react-router-dom';

const LOGIN_URL = "http://52.53.150.109:8080/AdeptusAdministratum/login";

export default class Login extends React.Component {
  state = {
    username: "admin",
    password: "admin",
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
        username: this.state.username,
        password: this.state.password,
      }),
    };

    fetch(LOGIN_URL, configObject)
      .then((resp) => {
        resp.json()
      })
      .then((json) => {
        this.setState({ redirect: true })
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: "/",
        state: { message: "Successfully Logged In!" },
      }}/>;
    } else {
      return (
        <div className="login-container">
          <h2>User Login</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  }
}
